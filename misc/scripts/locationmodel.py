import urllib.request, json

fips_to_name = {'01': 'Alabama', '02': 'Alaska', '04': 'Arizona',
'05': 'Arkansas', '06': 'California', '08': 'Colorado', '09': 'Connecticut',
'10': 'Delaware', '12': 'Florida', '13': 'Georgia', '15': 'Hawaii',
'16': 'Idaho', '17': 'Illinois', '18': 'Indiana', '19': 'Iowa',
'20': 'Kansas', '21': 'Kentucky', '22': 'Louisiana', '23': 'Maine',
'24': 'Maryland', '25': 'Massachusetts', '26': 'Michigan', '27': 'Minnesota',
'28': 'Mississippi', '29': 'Missouri', '30': 'Montana', '31': 'Nebraska',
'32': 'Nevada', '33': 'New Hampshire', '34': 'New Jersey', '35': 'New Mexico',
'36': 'New York', '37': 'North Carolina', '38': 'North Dakota', '39': 'Ohio', 
'40': 'Oklahoma', '41': 'Oregon', '42': 'Pennsylvania', '44': 'Rhode Island', 
'45': 'South Carolina', '46': 'South Dakota', '47': 'Tennessee', '48': 'Texas',
'49': 'Utah', '50': 'Vermont', '51': 'Virginia', '53': 'Washington', 
'54': 'West Virginia', '55': 'Wisconsin', '56': 'Wyoming'}

# TODO: add map for state mailing code (ex: TX) to fips code (ex: 48) so we can use national parks
# and recreational APIS.

class state:
    def __init__(self, fips, name, population):
        self.fips = str(fips)
        self.name = str(fips_to_name.get(fips))
        self.population = int(population)
        self.numParks = 0
        self.numRec = 0
    
    def add_parks(self):
        self.numParks = self.numParks + 1
    
    def add_rec(self):
        self.numRec = self.numRec + 1
    
    def __str__(self):
        string = 'Name: ' + self.name + ' FIPS: ' + self.fips + ' Population: ' + str(self.population)
        return string

states = []
apikey = 'e9a1b4d7b339d41c3fc92ce5560af35d06859342'

#Get FIPS, State name, and population data
with urllib.request.urlopen("https://api.census.gov/data/2018/pep/population?get=POP&for=state:*&key=" + apikey) as url:
    data = json.loads(url.read().decode())
    for s in data:
        if(s[0] != 'POP'):
            pop = s[0]
            fips = s[1]
            name = fips_to_name.get(fips)
            if(fips in fips_to_name): #Only include states, not minor outlying islands
                new_state = state(fips, name, pop)
                states.append(new_state)

#For testing
for s in states:
    print(str(s))


