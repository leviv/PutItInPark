file = open("allparkdata.txt", "r")
#create table
print ('CREATE TABLE nationalparks (park_code TINYINT(4), park_name VARCHAR(40), location VARCHAR(30), num_rec TINYINT(50), rec_ids VARCHAR(1000), desc VARCHAR(5000), lat DECIMAL(14,10), lon DECIMAL(14,10), fee DECIMAL(3,2), visitors INT(32), imglink VARCHAR(1000), park_id VARCHAR(256));') 

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
    desc = values[9]
    weather = values[10]
    num_rec = values[11]
    rec_ids = values[12].strip()

    command = 'INSERT INTO nationalparks (park_code, park_name, location, num_rec, rec_ids, desc, lat, lon, fee, visitors, imglink, park_id) values ('
    values = "\'" + str(code) + "\',\'" + str(name) + "\',\'" + str(location) + "\', " + str(num_rec) + ',\'' + str(rec_ids) + "\',\'" + str(desc) + '\', ' + str(lat) + ', ' + str(lon) + ', ' + str(fees) + ', ' + str(visitors) + ', \'' + str(imglink) + '\',\'' + str(park_id) + '\');'
    print(command + values)

file.close()