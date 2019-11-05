import urllib.request, json

#retrieve basic recreational area information

class recreation_area:
    #later add activities, num activities, imglink
    def __init__(self, rec_id, rec_name, location, natpark, reservable, lat, lon, description, parent_org_id, staylimit):
        self.rec_id = rec_id
        self.rec_name = rec_name
        self.location = location
        self.natpark = natpark
        self.reservable = reservable
        self.lat = lat
        self.lon = lon
        self.description = description
        self.parent_org = parent_org_id
        self.staylimit = staylimit
    
    def __str__(self):
        pt1 = str(self.rec_id) + '|' + str(self.rec_name) + '|' + str(self.location) + '|'
        pt2 = str(self.natpark) + '|' + str(reservable) + '|' + str(self.lat) + '|' + str(self.lon) + '|'
        pt3 = str(self.description) + '|' + str(self.parent_org) + '|' + str(self.staylimit).strip()
        return pt1 + pt2 + pt3

states = open("locationsnonatpark.txt", "r")

#rec id is key, rec_areas class is val
recs = {}

apikeyrec = '233a1540-c404-419b-b60c-ab4a096cc7d2'

for line in states:
    state = line.strip()
    with urllib.request.urlopen('https://ridb.recreation.gov/api/v1/recareas?limit=50&offset=0&state=' + state + '&apikey=' + apikeyrec) as url:
        rec = json.loads(url.read().decode())
        meta = 0
        rec_areas = rec.get("RECDATA")
        allareas = ""
        for area in rec_areas:
            rec_id = area.get('RecAreaID')
            lon = area.get('RecAreaLongitude')
            lat = area.get('RecAreaLatitude')
            if(lon != 0 and lat != 0):
                meta = meta + 1
                allareas += rec_id + ","
        end = len(allareas) - 1
        allareas[:end]
        print(state + " " + str(meta), end = " ")
        print(allareas)
