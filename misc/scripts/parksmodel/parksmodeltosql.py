file = open("parksmodelresults.txt", "r")

#create table
print ('CREATE TABLE nationalparks (name VARCHAR(255), parkcode VARCHAR(255), locations VARCHAR(255), fees DECIMAL(5,2), yearlyvisitors INT(255));')

#insert values
for line in file:
    values = line.split(",")
    
    name = values[0]
    code = values[1]
    locations = values[2]
    fees = values[3]
    visitors = values[4]


    command = 'INSERT INTO nationalparks (name, parkcode, locations, fees, yearlyvisitors) values ('
    values = "\'" + str(name) + "\', \'" + str(code) + "\', \'" + str(locations) + "\', " + str(fees) + ", " + str(visitors) + ');'
    print(command + values)

file.close()