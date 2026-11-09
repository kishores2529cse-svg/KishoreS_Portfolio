with open('scratch/decrypt_chunk.js', 'r', encoding='utf-8') as f:
    code = f.read()

idx = code.find('913328')
# Find the next module or export
print(code[idx:idx+1500])

