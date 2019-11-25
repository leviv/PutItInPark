import re

TAG_RE = re.compile(r'<[^>]+>')

def remove_tags(text):
    return TAG_RE.sub('', text)

file = open("recinfo.txt", "r")

for line in file:
    x = line.strip()
    print(remove_tags(x))