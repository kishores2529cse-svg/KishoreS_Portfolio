import urllib.request
import re

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

req = urllib.request.Request('https://suno.com/embed/0c8ae816-ad40-4bcc-8937-fd574fd27a15', headers=headers)
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8', errors='ignore')
    print('Embed HTML length:', len(html))

# Look for audio url in embed
audio_matches = re.findall(r'https?://[^\s"\'<>]+\.mp3[^\s"\'<>]*', html)
print('Audio matches in embed:', audio_matches)

# Look for audio_url or stream_url
stream_matches = re.findall(r'https?://[^\s"\'<>]*(?:stream|audio|song)[^\s"\'<>]*', html)
print('Stream matches:', stream_matches[:10])

# Look for json or data-props
with open('scratch/suno_embed.html', 'w', encoding='utf-8') as f:
    f.write(html)

