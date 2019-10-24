file = open("alllocationdata.txt", "r")
#create table
print ('CREATE TABLE location (fips VARCHAR(2), name VARCHAR(50), num_parks TINYINT(10), park_names VARCHAR(80), numrec TINYINT(250), rec_ids VARCHAR(1000), pop INT, mail_code VARCHAR(2), imglink VARCHAR(100));') 

#insert values
for line in file:
    values = line.split("|")
    fips = values[0]
    name = values[1]
    numparks = values[2]
    parks = values[3]
    if(parks == ''):
        parks = 'N/A'
    numrec = values[4]
    rec = values[5]
    if(rec == ''):
        rec = 'N/A'
    pop = values[6]
    mailcode = values[7]
    imglink = values[8].strip()

    command = 'INSERT INTO location (fips, name, num_parks, park_names, numrec, rec_ids, pop, mail_code, imglink) values ('
    values = "\'" + str(fips) + "\',\'" + str(name) + "\'," + str(numparks) + ",\'" + str(parks) + '\',' + str(numrec) + ",\'" + str(rec) + '\', ' + str(pop) + ',\'' + str(mailcode) + '\',\'' + str(imglink) + '\');'
    print(command + values)

file.close()