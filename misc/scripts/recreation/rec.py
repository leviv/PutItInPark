import urllib.request, json

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

model_relations = open("statesparksrecids.txt", "r")

#rec id is key, rec_areas class is val
recs = {}

apikeyrec = '233a1540-c404-419b-b60c-ab4a096cc7d2'

for p in model_relations:
    values = p.split(' ')
    natpark = values[0]
    loc = values[1]
    rec_ids = values[2].split(',')

    for rec in rec_ids:
        rec_id = rec.strip()
        with urllib.request.urlopen('https://ridb.recreation.gov/api/v1/recareas/' + rec_id + '?&apikey=' + apikeyrec) as url:
            rec_area = json.loads(url.read().decode())
            parent_id = rec_area.get('ParentOrgID')
            pre_name = str(rec_area.get('RecAreaName'))
            name = pre_name.replace(' ', '-')
            pre_description = str(rec_area.get('RecAreaDescription'))
            description = pre_description.replace('\n', "  ").replace('<p>', " ").replace('</p>', " ").replace("<em>", " ").replace('</em>', " ")
            lon = rec_area.get('RecAreaLongitude')
            lat = rec_area.get('RecAreaLatitude')
            staylimit = True
            if(rec_area.get("StayLimit") == ""):
                staylimit = False
            reservable = rec_area.get('Reservable')
            recs[rec_id] = recreation_area(rec_id, name, loc, natpark, reservable, lat, lon, description, parent_id, staylimit)

for value in recs.values():
    print(str(value))
    