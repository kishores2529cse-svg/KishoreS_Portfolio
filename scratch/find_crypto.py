with open('scratch/found_chunk.js', 'r', encoding='utf-8') as f:
    code = f.read()

import re
matches = re.findall(r'.{0,100}(?:decrypt|crypto|subtle|AES|cipher).{0,100}', code, re.IGNORECASE)
for m in matches[:10]:
    print('Match crypto:', m)

