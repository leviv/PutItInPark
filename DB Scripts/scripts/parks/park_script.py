import urllib.request, json

us_states = {
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

apikeyparks = 'VdrRc2ukbqSLclLVGyaWszz55PZAXd73LB5SK0Yj'
rec_key = '233a1540-c404-419b-b60c-ab4a096cc7d2'

class park:
    def __init__(self, code, name, park_id, states, lat, lon, fees, visitors, imglink, desc, weather):
        self.park_code = code
        self.park_name = name
        self.location = states
        self.description = desc
        self.weather = weather
        self.lat = lat
        self.lon = lon
        self.fee = fees
        self.visitors = visitors
        self.imglink = imglink
        self.park_id = park_id
        
    def add_related_rec_areas(self, count, rec_ids):
        self.num_rec = count
        self.rec_ids = rec_ids
    
    def __str__(self):
        pt1 = str(self.code) + '|' + str(self.name) + '|' + str(self.park_id) + '|'
        pt2 = str(self.states) + '|' + str(self.lat) + '|' + str(self.lon) + '|'
        pt3 = str(self.fees) + '|' + str(self.visitors) + '|' + str(self.imglink)
        pt4 = '|' + str(self.desc).strip() + '|' + str(self.weather).strip()
        pt5 = '|' + str(self.count).strip() + '|' + str(self.rec_ids).strip()
        return pt1 + pt2 + pt3 + pt4 + pt5

# Parses latitude and longitude values
def format_lat_long(latLong):
    result = latLong.split(', ')
    result[0] = result[0].strip('lat:')
    result[1] = result[1].strip('long:')
    return result

# Changes a space to a - for storage in db.
def format_string(orig_string):
    result = ''
    for c in orig_string:
        if(c == ' '):
            result += '-'
        else:
            result += c
    return result

nat_park_codes = open("parkcodesandvisitors.txt", "r")

# Park code is key, park class is the value
parks = {}

# Get basic national parks data - park code, park name, location, latitude, longitude, visitors etc
for p in nat_park_codes:
    values = p.split(' ')
    park_code = str(values[0]).strip()
    visitors = int(str(values[1]).strip())
    with urllib.request.urlopen('https://developer.nps.gov/api/v1/parks?parkCode=' + park_code + '&fields=entranceFees%2Cimages' + '&api_key=' + apikeyparks) as url:
        nat_park = json.loads(url.read().decode()).get('data')[0]
        name = format_string(nat_park.get('name'))
        park_id = nat_park.get('id')
        location = us_states[nat_park.get('states').split(",")[0]] # Just get the first state if there are multiple
        latLong = format_lat_long(nat_park.get('latLong'))
        lat = float(latLong[0]) # Ensure the type is float
        lon = float(latLong[1]) # Ensure the type is float
        fees = 0
        if(str(park_code) == 'cave'): #weird issue with retrieving Carlsbad
            fees = 12
        elif(nat_park.get('entranceFees') != None and len(nat_park.get('entranceFees')) > 0):
            fees = int(float(nat_park.get('entranceFees')[0].get('cost'))) # Ensure the type is int, have to cast to float first
        imglink = nat_park.get('images')[0].get('url')
        desc = nat_park.get('description')
        weather = nat_park.get('weatherInfo')
        parks[park_code] = park(park_code,name,park_id,location,lat,lon,fees,visitors,imglink,desc,weather)

# Get related rec areas by using lat/long
# Prints out park code, count of rec areas, and list of related recareas
for park_code in parks:
    park = parks[park_code]
    # Make the API call
    with urllib.request.urlopen('https://ridb.recreation.gov/api/v1/recareas?limit=50&offset=0&latitude=' + str(park.lat).strip() + '&longitude=' + str(park.lon).strip() + '&radius=25&apikey=' + rec_key) as url:
        result = json.loads(url.read().decode())
        count = int(result.get('METADATA').get('RESULTS').get('CURRENT_COUNT'))
        areas = ''
        recareas = result.get('RECDATA')
        for recarea in recareas:
            areas += recarea.get('RecAreaID') + ','
        
        # Remove the last comma if areas is not empty
        if areas:
            areas = areas[:-1]
        park.add_related_rec_areas(count, areas)

## Print the resulting file
with open('../../../client/src/components/fake_api/park.js', 'w') as f:
    print('export const parks = [', file=f)
    for park_code in parks:
        park = parks[park_code]
        print(json.dumps(park.__dict__), file=f)
        print(',', file=f)
    print('];', file=f)

print('Done :)')