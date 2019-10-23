import urllib.request, json

class state_identifiers:
    
    fips_to_name = {'01': 'Alabama', '02': 'Alaska', '04': 'Arizona',
    '05': 'Arkansas', '06': 'California', '08': 'Colorado', '09': 'Connecticut',
    '10': 'Delaware', '11': 'Washington-D.C', '12': 'Florida', '13': 'Georgia', 
    '15': 'Hawaii', '16': 'Idaho', '17': 'Illinois', '18': 'Indiana', '19': 'Iowa',
    '20': 'Kansas', '21': 'Kentucky', '22': 'Louisiana', '23': 'Maine',
    '24': 'Maryland', '25': 'Massachusetts', '26': 'Michigan', '27': 'Minnesota',
    '28': 'Mississippi', '29': 'Missouri', '30': 'Montana', '31': 'Nebraska',
    '32': 'Nevada', '33': 'New-Hampshire', '34': 'New-Jersey', '35': 'New-Mexico',
    '36': 'New-York', '37': 'North-Carolina', '38': 'North-Dakota', '39': 'Ohio', 
    '40': 'Oklahoma', '41': 'Oregon', '42': 'Pennsylvania', '44': 'Rhode Island', 
    '45': 'South-Carolina', '46': 'South-Dakota', '47': 'Tennessee', '48': 'Texas',
    '49': 'Utah', '50': 'Vermont', '51': 'Virginia', '53': 'Washington', 
    '54': 'West-Virginia', '55': 'Wisconsin', '56': 'Wyoming'}


    mail_code_to_fips = {'AL': '01', 'AK': '02', 'AZ': '04',
    'AR': '05', 'CA': '06', 'CO': '08', 'CT': '09', 'DE': '10', 'DC': '11',
    'FL': '12', 'GA': '14', 'HI': '15', 'ID': '16', 'IL': '17',
    'IN': '18', 'IA': '19', 'KS': '20', 'KY': '21', 'LA': '22',
    'ME': '23', 'MD': '24', 'MA': '25', 'MI': '26', 'MN': '27',
    'MS': '28', 'MO': '29', 'MT': '30', 'NE': '31', 'NV': '32',
    'NH': '33', 'NJ': '34', 'NM': '35', 'NY': '36', 'NC': '37',
    'ND': '38', 'OH': '39', 'OK': '40', 'OR': '41', 'PA': '42',
    'RI': '44', 'SC': '45', 'SD': '46', 'TN': '47', 'TX': '48',
    'UT': '49', 'VT': '50', 'VA': '51', 'WA': '53', 'WV': '54',
    'WI': '55', 'WY': '56'   
    }

    def get_name_from_fips(self, fips):
        return fips_to_name.get(fips)
    
    def get_name_from_mail_code(self, mail_code):
        return fips_to_name(get_fips_from_mail_code(mail_code))

    def get_fips_from_mail_code(self, mail_code):
        return mail_code_to_fips.get(mail_code)

    def get_fips_keys(self):
        return fips_to_name.keys()
    
    def get_mail_code_keys(self):
        return mail_code_to_fips.keys()

si = state_identifiers()

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
    