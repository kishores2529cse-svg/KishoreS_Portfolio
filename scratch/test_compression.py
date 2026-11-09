with open('scratch/suno_downloaded.m4a', 'rb') as f:
    data = f.read()

import zlib, gzip

print('Raw length:', len(data))
print('First 16 bytes hex:', data[:16].hex())

# Test zlib
try:
    decomp = zlib.decompress(data)
    print('zlib decompressed successfully, len:', len(decomp))
except Exception as e:
    print('zlib error:', e)

# Test gzip
try:
    decomp = gzip.decompress(data)
    print('gzip decompressed successfully, len:', len(decomp))
except Exception as e:
    print('gzip error:', e)

# Test raw deflate
try:
    decomp = zlib.decompress(data, -zlib.MAX_WBITS)
    print('raw deflate success, len:', len(decomp))
except Exception as e:
    print('raw deflate error:', e)

