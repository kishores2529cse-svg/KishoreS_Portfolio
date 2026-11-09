with open('scratch/decrypt_chunk.js', 'r', encoding='utf-8') as f:
    code = f.read()

import re
idx = code.find('glt')
print(code[max(0, idx-300):min(len(code), idx+800)])

