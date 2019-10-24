import urllib.request, json

#retrieve basic location information

fips_to_name = {'01': 'Alabama', '02': 'Alaska', '04': 'Arizona',
'05': 'Arkansas', '06': 'California', '08': 'Colorado', '09': 'Connecticut',
'10': 'Delaware', '11': 'Washington-D.C', '12': 'Florida', '13': 'Georgia', 
'15': 'Hawaii', '16': 'Idaho', '17': 'Illinois', '18': 'Indiana', '19': 'Iowa',
'20': 'Kansas', '21': 'Kentucky', '22': 'Louisiana', '23': 'Maine',
'24': 'Maryland', '25': 'Massachusetts', '26': 'Michigan', '27': 'Minnesota',
'28': 'Mississippi', '29': 'Missouri', '30': 'Montana', '31': 'Nebraska',
'32': 'Nevada', '33': 'New-Hampshire', '34': 'New-Jersey', '35': 'New-Mexico',
'36': 'New-York', '37': 'North-Carolina', '38': 'North-Dakota', '39': 'Ohio', 
'40': 'Oklahoma', '41': 'Oregon', '42': 'Pennsylvania', '44': 'Rhode-Island', 
'45': 'South-Carolina', '46': 'South-Dakota', '47': 'Tennessee', '48': 'Texas',
'49': 'Utah', '50': 'Vermont', '51': 'Virginia', '53': 'Washington', 
'54': 'West-Virginia', '55': 'Wisconsin', '56': 'Wyoming'}


mail_code_to_fips = {'AL': '01', 'AK': '02', 'AZ': '04',
'AR': '05', 'CA': '06', 'CO': '08', 'CT': '09', 'DE': '10', 'DC': '11',
'FL': '12', 'GA': '13', 'HI': '15', 'ID': '16', 'IL': '17',
'IN': '18', 'IA': '19', 'KS': '20', 'KY': '21', 'LA': '22',
'ME': '23', 'MD': '24', 'MA': '25', 'MI': '26', 'MN': '27',
'MS': '28', 'MO': '29', 'MT': '30', 'NE': '31', 'NV': '32',
'NH': '33', 'NJ': '34', 'NM': '35', 'NY': '36', 'NC': '37',
'ND': '38', 'OH': '39', 'OK': '40', 'OR': '41', 'PA': '42',
'RI': '44', 'SC': '45', 'SD': '46', 'TN': '47', 'TX': '48',
'UT': '49', 'VT': '50', 'VA': '51', 'WA': '53', 'WV': '54',
'WI': '55', 'WY': '56'}

class location:
    #later add activities, num activities, imglink
    def __init__(self, fips, name, pop, mail_code, imglink):
        self.fips = fips
        self.name = name
        self.pop = pop
        self.mail_code = mail_code
        self.imglink = imglink
        self.num_parks = 0
        self.num_rec = 0
        self.rec_ids = ""
        self.park_names = ""

    
    def add_park(self, nat_park):
        self.park_names += str(nat_park) + ","
        self.num_parks = self.num_parks + 1
    
    def add_rec(self, rec):
        self.rec_ids += str(rec) + ","
        self.num_rec += len(rec.split(','))
    
    def __str__(self):
        pt1 = str(self.fips) + '|' + str(self.name) + '|' + str(self.num_parks) + '|'
        pt2 = str(self.park_names).strip(',') + '|' + str(self.num_rec) + '|' + str(self.rec_ids).strip(',')
        pt3 = '|' + str(self.pop) + '|' + str(self.mail_code) + '|' + str(self.imglink)
        return pt1 + pt2 + pt3

locations = {}

apikeyloc = 'e9a1b4d7b339d41c3fc92ce5560af35d06859342'
model_relations = open("statesparksrecids.txt", "r")

for mail_code in mail_code_to_fips.keys():
    fips = mail_code_to_fips.get(mail_code)
    name = fips_to_name.get(fips)
    population = 0
    imglink = 'http://flags.ox3.in/svg/us/' + mail_code.lower() + '.svg'
    with urllib.request.urlopen('https://api.census.gov/data/2018/pep/population?get=POP&for=state:'+ fips + '&key=' + apikeyloc) as url:
        data = json.loads(url.read().decode())
        pop = data[1][0]
    locations[name] = location(fips,name,pop,mail_code,imglink)


for line in model_relations:
    values = line.split(' ')
    parks = values[0].strip()
    st_names = values[1].split(",")
    recids = values[2].strip()
    for st_name in st_names:
        state = locations.get(st_name)
        state.add_park(parks)
        state.add_rec(recids)

for value in locations.values():
    print(str(value))
    