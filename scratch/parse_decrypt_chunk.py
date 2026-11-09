with open('scratch/decrypt_chunk.js', 'r', encoding='utf-8') as f:
    code = f.read()

import re
matches = re.findall(r'.{0,200}AES-GCM.{0,300}', code)
for m in matches:
    print('AES-GCM block:\n', m, '\n---')

matches2 = re.findall(r'.{0,200}AES-CTR.{0,300}', code)
for m in matches2:
    print('AES-CTR block:\n', m, '\n---')

