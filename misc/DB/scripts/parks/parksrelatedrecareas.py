import urllib.request, json

# Get related rec areas by using lat/long
# prints out park code, count of rec areas, and list of related recareas
file = open("latlongofparks.txt", "r")

rec_key = '233a1540-c404-419b-b60c-ab4a096cc7d2'

for line in file:
    values = line.split(' ')
    code = values[0]
    lat = values[1]
    lon = values[2]
    with urllib.request.urlopen('https://ridb.recreation.gov/api/v1/recareas?limit=50&offset=0&latitude=' + str(lat).strip() + '&longitude=' + str(lon).strip() + '&radius=25&apikey=' + rec_key) as url:
        result = json.loads(url.read().decode())
        count = result.get('METADATA').get('RESULTS').get('CURRENT_COUNT')
        areas = ''
        recareas = result.get('RECDATA')
        for recarea in recareas:
            areas += recarea.get('RecAreaID') + ','
        end = len(areas) - 1
        areas[:end]
        print(str(code) + ' ' + str(count) + ' ' + str(areas))

file.close()