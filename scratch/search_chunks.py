import urllib.request
import re

with open('scratch/suno_page.html', 'r', encoding='utf-8') as f:
    html = f.read()

scripts = re.findall(r'src="([^"]+\.js)"', html)

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for s in scripts:
    url = f'https://suno.com{s}'
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            content = resp.read().decode('utf-8', errors='ignore')
            if 'm4a-opus' in content or 'media_urls' in content:
                print(f'Found in {s}!')
                matches = re.findall(r'.{0,50}(?:m4a-opus|media_urls).{0,50}', content)
                for m in matches[:5]:
                    print('   ', m)
                with open('scratch/found_chunk.js', 'w', encoding='utf-8') as cf:
                    cf.write(content)
                break
    except Exception as e:
        pass

