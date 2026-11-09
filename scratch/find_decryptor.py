import urllib.request
import re

with open('scratch/suno_page.html', 'r', encoding='utf-8') as f:
    html = f.read()

scripts = re.findall(r'src="([^"]+\.js)"', html)
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

keywords = ['decrypt', '1.0.0', 'WebCrypto', 'crypto.subtle', 'aes-gcm', 'AES-GCM', 'AES-CBC']

for i, s in enumerate(scripts):
    url = f'https://suno.com{s}'
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            content = resp.read().decode('utf-8', errors='ignore')
            for kw in ['1.0.0', 'aes-gcm', 'AES-GCM', 'crypto.subtle']:
                if kw in content:
                    print(f'Script {s} matches "{kw}"!')
                    matches = re.findall(rf'.{{0,50}}{kw}.{{0,50}}', content)
                    for m in matches[:3]:
                        print('   ', m)
    except Exception as e:
        pass

