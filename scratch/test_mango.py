import urllib.request
import json

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Content-Type': 'application/json',
    'Referer': 'https://suno.com/song/0c8ae816-ad40-4bcc-8937-fd574fd27a15?sh=Uv76HjCjIpTiCWT6',
    'Origin': 'https://suno.com'
}

body = json.dumps({
    'content_params': {
        'content_id': '0c8ae816-ad40-4bcc-8937-fd574fd27a15',
        'content_type': 'clip'
    }
}).encode()

endpoints = [
    'https://suno.com/api/mango/rights',
    'https://studio-api-prod.suno.com/api/mango/rights',
    'https://studio-api.prod.suno.com/api/mango/rights'
]

for ep in endpoints:
    try:
        req = urllib.request.Request(ep, data=body, headers=headers)
        with urllib.request.urlopen(req) as resp:
            data = resp.read().decode('utf-8')
            print(f'{ep} SUCCESS -> {data}')
            with open('scratch/mango_rights.json', 'w') as f:
                f.write(data)
            break
    except Exception as e:
        print(f'{ep} error -> {e}')

