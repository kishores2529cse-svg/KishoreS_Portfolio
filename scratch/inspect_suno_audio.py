import av
import numpy as np

container = av.open('scratch/suno_downloaded.m4a')
stream = container.streams.audio[0]

samples = []
for frame in container.decode(stream):
    arr = frame.to_ndarray()
    samples.append(arr)

data = np.concatenate(samples, axis=1)
total_duration = data.shape[1] / stream.rate
print(f'Total Duration: {total_duration:.2f}s, Sample Rate: {stream.rate}, Channels: {data.shape[0]}, Shape: {data.shape}')

# Let's inspect the section around 15s to 35s
start_sec = 15.0
end_sec = 34.70  # 19.70s to match video duration exactly, or 33.0s
print(f'15s sample index: {int(start_sec * stream.rate)}, 33s sample index: {int(33.0 * stream.rate)}, 34.7s sample index: {int(end_sec * stream.rate)}')

