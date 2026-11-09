with open('scratch/decrypt_chunk.js', 'r', encoding='utf-8') as f:
    code = f.read()

import re
idx = code.find('913328')
print(code[max(0, idx-100):min(len(code), idx+1000)])

