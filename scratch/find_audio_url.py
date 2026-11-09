with open('scratch/suno_page.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re
matches = re.findall(r'.{0,100}0c8ae816-ad40-4bcc-8937-fd574fd27a15.{0,100}', html)
for m in matches[:10]:
    print('Match:', m)

