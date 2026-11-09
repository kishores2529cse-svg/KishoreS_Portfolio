import av

container = av.open('scratch/decrypted_suno.m4a')
stream = container.streams.audio[0]
print(f'Stream codec: {stream.codec_context.name}, sample_rate: {stream.rate}, channels: {stream.channels}')
duration = float(stream.duration * stream.time_base) if stream.duration else None
print(f'Duration: {duration}s')

# Read frames to verify
total_samples = 0
for frame in container.decode(stream):
    total_samples += frame.samples

exact_duration = total_samples / stream.rate
print(f'Exact decoded duration: {exact_duration:.2f} seconds ({total_samples} samples)')

