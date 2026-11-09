with open('scratch/decrypt_chunk.js', 'r', encoding='utf-8') as f:
    code = f.read()

import re
matches = re.findall(r'.{0,150}License server.{0,250}', code)
for m in matches:
    print('Match license:\n', m)

