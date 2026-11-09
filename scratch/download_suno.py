import urllib.request
import re
import json

url = 'https://suno.com/s/Uv76HjCjIpTiCWT6'
req = urllib.request.Request(
    url,
    headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
)

with urllib.request.urlopen(req) as resp:
    final_url = resp.geturl()
    html = resp.read().decode('utf-8', errors='ignore')
    print('Final URL:', final_url)
    print('HTML length:', len(html))

# Look for audio URLs
audio_urls = re.findall(r'https?://[^\s"\'<>]+\.mp3[^\s"\'<>]*', html)
print('Direct MP3s:', audio_urls)

# Check for suno cdn URLs
cdn_urls = re.findall(r'https?://cdn\d*\.suno\.ai/[^\s"\'<>]+', html)
print('CDN URLs:', cdn_urls)

# Check for audiopipe URLs
audiopipe = re.findall(r'https?://audiopipe[^\s"\'<>]+', html)
print('Audiopipe URLs:', audiopipe)

# Find UUIDs (song IDs)
uuids = list(set(re.findall(r'[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}', html)))
print('UUIDs:', uuids)

with open('scratch/suno_page.html', 'w', encoding='utf-8') as f:
    f.write(html)

