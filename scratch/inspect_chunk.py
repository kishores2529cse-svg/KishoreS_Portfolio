with open('scratch/found_chunk.js', 'r', encoding='utf-8') as f:
    code = f.read()

import re
matches = re.findall(r'.{0,100}1\.0\.0.{0,100}', code)
for m in matches[:10]:
    print('Match 1.0.0:', m)

matches2 = re.findall(r'.{0,100}encoding.{0,100}', code)
for m in matches2[:10]:
    print('Match encoding:', m)

