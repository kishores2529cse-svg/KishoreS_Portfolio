import urllib.request
import json

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Referer': 'https://suno.com/',
    'Origin': 'https://suno.com'
}

endpoints = [
    'https://studio-api-prod.suno.com/api/feed/v2?ids=0c8ae816-ad40-4bcc-8937-fd574fd27a15',
    'https://studio-api-prod.suno.com/api/feed/?ids=0c8ae816-ad40-4bcc-8937-fd574fd27a15',
    'https://studio-api.prod.suno.com/api/feed/v2?ids=0c8ae816-ad40-4bcc-8937-fd574fd27a15',
    'https://studio-api-prod.suno.com/api/songs/0c8ae816-ad40-4bcc-8937-fd574fd27a15',
    'https://studio-api-prod.suno.com/api/clips/0c8ae816-ad40-4bcc-8937-fd574fd27a15',
    'https://studio-api.prod.suno.com/api/clips/0c8ae816-ad40-4bcc-8937-fd574fd27a15',
]

for ep in endpoints:
    try:
        req = urllib.request.Request(ep, headers=headers)
        with urllib.request.urlopen(req) as resp:
            data = resp.read().decode('utf-8')
            print(f'{ep} SUCCESS -> {data[:200]}')
            with open('scratch/api_result.json', 'w') as f:
                f.write(data)
            break
    except Exception as e:
        print(f'{ep} -> {e}')

