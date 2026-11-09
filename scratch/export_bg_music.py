import av
import numpy as np

# Open decrypted audio
container = av.open('scratch/decrypted_suno.m4a')
stream = container.streams.audio[0]

sample_rate = stream.rate
print(f'Input sample rate: {sample_rate}')

# Decode all frames to numpy array
frames_data = []
for frame in container.decode(stream):
    frames_data.append(frame.to_ndarray())

data = np.concatenate(frames_data, axis=1) # shape: (channels, total_samples)
print(f'Total samples: {data.shape[1]}, Duration: {data.shape[1] / sample_rate:.2f}s')

# Exact video duration: 19.70 seconds (or 18.0s if 15 to 33)
# Let's inspect 15.0 to 34.70s
start_sec = 15.0
# Our video has 530 frames. 530 / 26.92 fps = 19.69s.
# Let's extract 19.70s from 15.0s to 34.70s
video_audio_duration = 19.70
end_sec = start_sec + video_audio_duration

start_sample = int(start_sec * sample_rate)
end_sample = int(end_sec * sample_rate)

sliced = data[:, start_sample:end_sample].copy()
print(f'Sliced shape: {sliced.shape}, Sliced duration: {sliced.shape[1] / sample_rate:.2f}s')

# Add subtle fade in (0.3s) and fade out (0.8s) so looping is seamless and luxurious
fade_in_samples = int(0.3 * sample_rate)
fade_out_samples = int(0.8 * sample_rate)

fade_in_curve = np.linspace(0.0, 1.0, fade_in_samples)
fade_out_curve = np.linspace(1.0, 0.0, fade_out_samples)

sliced[:, :fade_in_samples] *= fade_in_curve
sliced[:, -fade_out_samples:] *= fade_out_curve

# Peak normalize to -1.0 dB (0.89 amplitude) for luxury sound, no distortion
max_peak = np.max(np.abs(sliced))
if max_peak > 0:
    sliced = (sliced / max_peak) * 0.89

print(f'Normalized max peak: {np.max(np.abs(sliced)):.4f}')

# Encode to public/audio/bg_music.mp3
out_container = av.open('public/audio/bg_music.mp3', mode='w')
out_stream = out_container.add_stream('mp3', rate=44100)
out_stream.bit_rate = 256000 # High quality 256kbps

# Resample from 48000 to 44100
import scipy.signal
num_out_samples = int(sliced.shape[1] * 44100 / sample_rate)
resampled_left = scipy.signal.resample(sliced[0], num_out_samples)
resampled_right = scipy.signal.resample(sliced[1], num_out_samples)
resampled = np.vstack([resampled_left, resampled_right]).astype(np.float32)

print(f'Resampled shape: {resampled.shape}, duration: {resampled.shape[1] / 44100:.2f}s')

frame_size = 1152 # standard MP3 frame size
for i in range(0, resampled.shape[1], frame_size):
    chunk = resampled[:, i:i+frame_size]
    if chunk.shape[1] < frame_size:
        pad = np.zeros((2, frame_size - chunk.shape[1]), dtype=np.float32)
        chunk = np.hstack([chunk, pad])
    frame = av.AudioFrame.from_ndarray(chunk, format='fltp', layout='stereo')
    frame.rate = 44100
    for packet in out_stream.encode(frame):
        out_container.mux(packet)

for packet in out_stream.encode():
    out_container.mux(packet)

out_container.close()
print('Successfully saved to public/audio/bg_music.mp3!')

