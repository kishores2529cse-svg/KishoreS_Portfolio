import urllib.request
import json
import urllib.parse

song_url = 'https://suno.com/song/0c8ae816-ad40-4bcc-8937-fd574fd27a15'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

# Test usesuno
try:
    req = urllib.request.Request('https://usesuno.com/api/get-info', data=json.dumps({'url': song_url}).encode(), headers={**headers, 'Content-Type': 'application/json'})
    with urllib.request.urlopen(req) as resp:
        print('usesuno response:', resp.read().decode())
except Exception as e:
    print('usesuno error:', e)

# Test sunodownloader.ai
try:
    req = urllib.request.Request('https://sunodownloader.ai/api/download', data=json.dumps({'url': song_url}).encode(), headers={**headers, 'Content-Type': 'application/json'})
    with urllib.request.urlopen(req) as resp:
        print('sunodownloader response:', resp.read().decode())
except Exception as e:
    print('sunodownloader error:', e)

