import urllib.request
import json

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

# 1. Test oembed
try:
    req = urllib.request.Request('https://studio-api-prod.suno.com/api/oembed?url=https%3A%2F%2Fsuno.com%2Fsong%2F0c8ae816-ad40-4bcc-8937-fd574fd27a15', headers=headers)
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode())
        print('oembed response:', json.dumps(data, indent=2))
except Exception as e:
    print('oembed error:', e)

# 2. Test direct CDN
urls_to_test = [
    'https://cdn1.suno.ai/0c8ae816-ad40-4bcc-8937-fd574fd27a15.mp3',
    'https://cdn2.suno.ai/0c8ae816-ad40-4bcc-8937-fd574fd27a15.mp3',
    'https://audiopipe.suno.ai/?item_id=0c8ae816-ad40-4bcc-8937-fd574fd27a15'
]

for u in urls_to_test:
    try:
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req) as resp:
            print(f'{u} -> status: {resp.status}, length: {resp.headers.get("Content-Length")}, type: {resp.headers.get("Content-Type")}')
    except Exception as e:
        print(f'{u} -> error: {e}')

