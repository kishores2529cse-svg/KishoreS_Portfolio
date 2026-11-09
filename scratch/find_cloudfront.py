with open('scratch/suno_page.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re
matches = re.findall(r'.{0,100}d2lwuy8qc234o3\.cloudfront\.net.{0,100}', html)
for m in matches:
    print('Match:', m)

