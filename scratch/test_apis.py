import urllib.request
import json

# Test sunodownloader.net or similar
services = [
    'https://api.musicapi.ai/api/v1/suno/download',
    'https://sunoaidownload.com/api/get-song',
    'https://suno-downloader.com/api/info'
]

for s in services:
    try:
        req = urllib.request.Request(s, data=json.dumps({'url': 'https://suno.com/song/0c8ae816-ad40-4bcc-8937-fd574fd27a15'}).encode(), headers={'User-Agent': 'Mozilla/5.0', 'Content-Type': 'application/json'})
        with urllib.request.urlopen(req) as resp:
            print(s, 'SUCCESS:', resp.read()[:200])
    except Exception as e:
        print(s, 'error:', e)

