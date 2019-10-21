# Messy code, but I'm keeping it for reference
file = open("locationmodelresults.txt", "r")

for line in file:
    values = line.split(" ")
    
    fips = ''
    name = ''
    numparks = ''
    numrec = ''
    population = ''

    if(len(values) == 6):
        fips = values[0]
        name = values[1] + ' ' + values[2]
        numparks = values[3]
        numrec = values[4]
        population = values[5]
    else: 
        fips = values[0]
        name = values[1]
        numparks = values[2]
        numrec = values[3]
        population = values[4]

    command = 'INSERT INTO location (fips, name, numnatparks, numrecactivities, population) values ('
    values = str(fips) + ", \'" + str(name) + "\', " + str(numparks) + ", " + str(numrec) + ', ' + str(population) + ');'
    print(command + values)

file.close()