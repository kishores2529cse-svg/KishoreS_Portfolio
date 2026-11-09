import urllib.request

url = 'https://suno.com/_next/static/immutable/chunks/262f-0nui52nz.js'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req) as resp:
    code = resp.read().decode('utf-8')

with open('scratch/decrypt_chunk.js', 'w', encoding='utf-8') as f:
    f.write(code)

print('Saved chunk len:', len(code))

