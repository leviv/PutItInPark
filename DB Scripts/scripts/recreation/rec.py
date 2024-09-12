import urllib.request, json
import requests

apikeyrec = '233a1540-c404-419b-b60c-ab4a096cc7d2'
statesToNameMap = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "FL": "Florida",
    "GA": "Georgia",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PA": "Pennsylvania",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
}

# Retrieve basic recreational area information
class recreation_area:
    # Later add activities, num activities, imglink
    def __init__(self, rec_id, rec_name, location, natpark, reservable, lat, lon, description, parent_org_id, staylimit):
        self.rec_id = rec_id
        self.rec_name = rec_name
        self.location = location
        self.natpark = natpark
        self.reservable = reservable
        self.lat = lat
        self.lon = lon
        self.description = description
        self.par_org_id = parent_org_id
        self.stay_limit = staylimit

    def add_activities(self, num_activities, activities):
        self.num_activities = num_activities
        self.activities = activities

    def add_imglink(self, imglink):
        self.imglink = imglink
    
    def __str__(self):
        pt1 = str(self.rec_id) + '|' + str(self.rec_name) + '|' + str(self.location) + '|'
        pt2 = str(self.natpark) + '|' + str(reservable) + '|' + str(self.lat) + '|' + str(self.lon) + '|'
        pt3 = str(self.description) + '|' + str(self.par_org_id) + '|' + str(self.stay_limit).strip()
        pt4 = str(self.num_activities) + '|' + str(self.activities) + '|' + str(self.imglink)
        return pt1 + pt2 + pt3 + pt4


# Rec id is key, rec_areas class is val

for state in statesToNameMap:
    recs = {}
    prev_num_recs = -1
    offset = 0
    stateName = statesToNameMap[state]
    while prev_num_recs != len(recs):
        prev_num_recs = len(recs)
        with urllib.request.urlopen('https://ridb.recreation.gov/api/v1/recareas?limit=50&offset=' + str(offset) + '&state=' + state + '&apikey=' + apikeyrec) as url:
            rec_data = json.loads(url.read().decode()).get('RECDATA')
            for rec_area in rec_data:
                rec_id = rec_area.get('RecAreaID')
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
                recs[rec_id] = recreation_area(rec_id, name, stateName, 'N/A', reservable, lat, lon, description, parent_id, staylimit)
        
        offset += 50

print("Total number of rec areas: " + str(len(recs)))
print("\n\n\n ")

# Retrieve activities info for each rec area

for rec_id in recs:
    rec = recs[rec_id]

    # retrieve activities info
    num_activities = 0
    activities = ''

    with urllib.request.urlopen('https://ridb.recreation.gov/api/v1/recareas/' + rec_id + '/activities?limit=50&offset=0?&apikey=' + apikeyrec) as url:
        result = json.loads(url.read().decode())
        num_activities = result.get('METADATA').get('RESULTS').get('CURRENT_COUNT')
        recdata = result.get('RECDATA')
        for act in recdata:
            pre_activity = act.get('ActivityName')
            activities += pre_activity.replace(' ', '-') + ','
    
    #next step - use image searching api to find images for all rec areas
    rec.add_activities(num_activities, activities.strip(','))


# Fetched from here: https://github.com/leviv/PutItInPark/commit/40efa084e63c7c18410d874d0a4311c422b38e10#diff-5cda06a3d88be61ab3f35ed44e51d50516247eb4fb3d4c8ea41b6d7b890052b6
# Getting images for each rec

for rec_id in recs:
    rec = recs[rec_id]
    rec_name = rec.rec_name

    subscription_key = "KEY"
    search_url = "https://api.bing.microsoft.com/v7.0/images/search"
    search_term = rec_name.replace("-", " ")

    headers = {"Ocp-Apim-Subscription-Key" : subscription_key}
    params  = {"q": search_term, "license": "public", "imageType": "photo", "safeSearch" : "Strict", "count" : "30"}

    response = requests.get(search_url, headers=headers, params=params)
    response.raise_for_status()
    search_results = response.json()
    pics = search_results.get("value")
    found = False
    for pic in pics:
        if pic != '':
            rec.add_imglink(pic.get('contentUrl').strip())
            found = True
            break
    if not found:
        rec.add_imglink('\n\n\t\tNOT FOUND!! ERROR\n\n')

## Print the resulting file
with open('../../../client/src/components/fake_api/rec.js', 'w') as f:
    print('export const recs = [', file=f)
    for rec_id in recs:
        rec = recs[rec_id]
        print(json.dumps(rec.__dict__), file=f)
        print(',', file=f)
    print('];', file=f)

print('Done :)')