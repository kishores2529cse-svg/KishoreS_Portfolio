with open('scratch/decrypt_chunk.js', 'r', encoding='utf-8') as f:
    code = f.read()

idx = code.find('913328')
print(code[idx+1400:idx+3000])

