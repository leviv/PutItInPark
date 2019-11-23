import urllib.request, json

previds = set()

n = open("recinfo.txt")
for line in n:
    v = line.split('|')
    previds.add(v[0])


file = open("stateswnatpark.txt", "r")
apikeyrec = '233a1540-c404-419b-b60c-ab4a096cc7d2'

for line in file:
    x = line.strip('\n')
    urlpre = 'https://ridb.recreation.gov/api/v1/recareas?limit=5&state=' + x + '&apikey=' + apikeyrec
    with urllib.request.urlopen(urlpre) as url:
        rec_area = json.loads(url.read().decode()).get("RECDATA")
        for r in rec_area:
            rec_id = r.get('RecAreaID')
            print(x + " " + rec_id)