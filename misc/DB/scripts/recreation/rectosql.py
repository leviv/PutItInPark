#create table
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

print ('CREATE TABLE recreation (rec_id VARCHAR(10), rec_name VARCHAR(100), location VARCHAR(30), natpark VARCHAR(30), reservable VARCHAR(5), lat VARCHAR(20), lon VARCHAR(20), activities VARCHAR(300), imglink VARCHAR(1000), num_activities TINYINT(40), description VARCHAR(4000), par_org_id VARCHAR(10), stay_limit VARCHAR(5));')

def alter_text(text):
    res = ''
    for c in text :
        if c == '\'':
            res += '\'\''
        else:
            res += c 
    return res

file = open("newrecinfoupdate.txt", "r")

for line in file:
    v = line.split("|")
    rec_id =v[0]
    rec_name = alter_text(v[1]).strip('-')
    loc = str(v[2]).strip()
    if(mail_code_to_fips.__contains__(loc)):
        mail_code = mail_code_to_fips.get(loc)
        temp = fips_to_name.get(mail_code)
        loc = temp
    park = v[3]
    res = v[4]
    lat = v[5]
    lon = v[6]
    description = alter_text(v[7]).strip()
    parent_org = v[8]
    staylimit = v[9]
    num_activities = v[10]
    activities = str(v[11])
    imglink = alter_text(str(v[12]).strip())

    command = 'INSERT INTO recreation (rec_id, rec_name, location, natpark, reservable, lat, lon, activities, imglink, num_activities, description, par_org_id, stay_limit) values ('
    values = "\'" + str(rec_id) + "\',\'" + str(rec_name) + "\',\'" + str(loc) + "\',\'" + str(park) + '\',' + str(res) + ", " + str(lat) + ', ' + str(lon) + ', \'' + str(activities) + '\',\'' + str(imglink) + '\', ' + str(num_activities) + ', \'' + str(description) + '\',\'' + str(parent_org) + '\',' + str(staylimit) + ');'
    print(command + values)

file.close()