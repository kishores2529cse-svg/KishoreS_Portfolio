with open('scratch/found_chunk.js', 'r', encoding='utf-8') as f:
    code = f.read()

idx = code.find('encrypted:n')
print(code[max(0, idx-300):min(len(code), idx+500)])

