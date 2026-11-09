with open('scratch/suno_page.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

# Look for audio_url
matches = re.findall(r'"audio_url"[^,}]+', html)
print('audio_url matches:', matches)

matches2 = re.findall(r'"video_url"[^,}]+', html)
print('video_url matches:', matches2)

# Search for any .mp3 or .mp4 or .m4a or .wav
matches3 = re.findall(r'https?://[^\s"\'<>\\]+\.(?:mp3|mp4|m4a|wav)[^\s"\'<>\\]*', html)
print('media matches:', set(matches3))

# Search for audio keywords
lines = [line for line in html.split('\n') if 'audio' in line.lower()]
print(f'Total lines with audio: {len(lines)}')
for l in lines[:5]:
    print('Sample line:', l[:150])

