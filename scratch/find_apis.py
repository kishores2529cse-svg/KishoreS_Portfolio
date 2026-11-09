with open('scratch/suno_page.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re
apis = set(re.findall(r'https?://[^\s"\'<>]*api[^\s"\'<>]*', html))
for a in sorted(apis):
    print('API url:', a)

keys = set(re.findall(r'"[a-zA-Z0-9_]*audio[a-zA-Z0-9_]*":\s*"[^"]*"', html))
for k in keys:
    print('Audio key:', k)

