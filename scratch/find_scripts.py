with open('scratch/suno_page.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

scripts = re.findall(r'src="([^"]+\.js)"', html)
print(f'Total script tags: {len(scripts)}')
for s in scripts[:10]:
    print('Script:', s)

