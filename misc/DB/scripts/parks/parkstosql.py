file = open("allparkdata.txt", "r")
#create table
print ('CREATE TABLE nationalparks (park_code VARCHAR(5), park_name VARCHAR(50), location VARCHAR(30), num_rec TINYINT(50), rec_ids VARCHAR(1000), description VARCHAR(5000), weather VARCHAR(5000), lat VARCHAR(20), lon VARCHAR(20), fee VARCHAR(10), visitors INT(32), imglink VARCHAR(1000), park_id VARCHAR(256));') 

def alter_text(text):
    res = ''
    for c in text :
        if c == '\'':
            res += '\'\''
        else:
            res += c 
    return res

#insert values
for line in file:
    values = line.split("|")

    code = values[0]
    name = values[1]
    park_id = values[2]
    location = values[3]
    lat = values[4]
    lon = values[5]
    fees = values[6]
    visitors = values[7]
    imglink = values[8]
    desc = alter_text(values[9]).strip()
    weather = alter_text(values[10]).strip()
    num_rec = values[11]
    rec_ids = values[12].strip()

    command = 'INSERT INTO nationalparks (park_code, park_name, location, num_rec, rec_ids, description, weather, lat, lon, fee, visitors, imglink, park_id) values ('
    values = "\'" + str(code) + "\',\'" + str(name) + "\',\'" + str(location) + "\', " + str(num_rec) + ',\'' + str(rec_ids) + "\',\'" + str(desc) + '\', \'' + str(weather) + '\', ' + str(lat) + ', ' + str(lon) + ', ' + str(fees) + ', ' + str(visitors) + ', \'' + str(imglink) + '\',\'' + str(park_id) + '\');'
    print(command + values)

file.close()