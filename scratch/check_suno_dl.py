import urllib.request
import re

req = urllib.request.Request('https://sunodownloader.ai', headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8')
        print('sunodownloader HTML len:', len(html))
        # Look for form action or fetch calls
        apis = re.findall(r'fetch\([\'"]([^\'"]+)[\'"]', html)
        print('Fetches:', apis)
except Exception as e:
    print('Error:', e)

