import urllib.request, json

class park:
    def __init__(self, code, name, park_id, states, lat, lon, fees, visitors, imglink, desc, weather):
        self.code = code
        self.name = name
        self.park_id = park_id
        self.states = states
        self.lat = lat
        self.lon = lon
        self.fees = fees
        self.visitors = visitors
        self.imglink = imglink
        self.desc = desc
        self.weather = weather
    
    def __str__(self):
        pt1 = str(self.code) + '|' + str(self.name) + '|' + str(self.park_id) + '|'
        pt2 = str(self.states) + '|' + str(self.lat) + '|' + str(self.lon) + '|'
        pt3 = str(self.fees) + '|' + str(self.visitors) + '|' + str(self.imglink)
        pt4 = '|' + str(self.desc).strip() + '|' + str(self.weather).strip()
        return pt1 + pt2 + pt3 + pt4

#parses latitude and longitude values
def format_lat_long(latLong):
    result = latLong.split(', ')
    result[0] = result[0].strip('lat:')
    result[1] = result[1].strip('long:')
    return result

#changes a space to a - for storage in db.
def format_string(orig_string):
    result = ''
    for c in orig_string:
        if(c == ' '):
            result += '-'
        else:
            result += c
    return result

nat_park_codes = open("parkcodesandvisitors.txt", "r")

#park code is key, park class is val
parks = {}

#Get basic national parks data - park code, park name, location, latitude, longitude, visitors
apikeyparks = 'VdrRc2ukbqSLclLVGyaWszz55PZAXd73LB5SK0Yj'

for p in nat_park_codes:
    values = p.split(' ')
    park_code = str(values[0]).strip()
    visitors = str(values[1]).strip()
    with urllib.request.urlopen('https://developer.nps.gov/api/v1/parks?parkCode=' + park_code + '&fields=entranceFees%2Cimages' + '&api_key=' + apikeyparks) as url:
        nat_park = json.loads(url.read().decode()).get('data')[0]
        name = format_string(nat_park.get('name'))
        park_id = nat_park.get('id')
        location = nat_park.get('states')
        latLong = format_lat_long(nat_park.get('latLong'))
        lat = latLong[0]
        lon = latLong[1]
        fees = 0
        if(str(park_code) == 'cave'): #weird issue with retrieving Carlsbad
            fees = 12
        elif(nat_park.get('entranceFees') != None):
            fees = nat_park.get('entranceFees')[0].get('cost')
        imglink = nat_park.get('images')[0].get('url')
        desc = nat_park.get('description')
        weather = nat_park.get('weatherInfo')
        parks[park_code] = park(park_code,name,park_id,location,lat,lon,fees,visitors,imglink,desc,weather)

for value in parks.values():
    print(str(value))
    