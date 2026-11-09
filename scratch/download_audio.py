import urllib.request

url = 'https://d2lwuy8qc234o3.cloudfront.net/1/clip/0c8ae816-ad40-4bcc-8937-fd574fd27a15.m4a'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as resp:
        print(f'Status: {resp.status}')
        print(f'Content-Length: {resp.headers.get("Content-Length")}')
        print(f'Content-Type: {resp.headers.get("Content-Type")}')
        content = resp.read()
        with open('scratch/suno_downloaded.m4a', 'wb') as f:
            f.write(content)
        print(f'Saved {len(content)} bytes to scratch/suno_downloaded.m4a')
except Exception as e:
    print('Download error:', e)

