with open('scratch/suno_page.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re
idx = html.find('d2lwuy8qc234o3.cloudfront.net')
print(html[idx-150:idx+350])

