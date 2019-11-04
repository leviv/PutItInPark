# Extract locations with no National Parks in order to get rec areas
file = open("alllocationdata.txt", "r")

for line in file:
    values = line.split("|")
    numparks = values[2]
    if numparks == '0':
        mailcode = values[7]
        print(mailcode)

file.close()