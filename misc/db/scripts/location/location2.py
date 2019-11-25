file = open("locationinfo.txt", "r")

for line in file:
    v = line.split("|")
    name = v[7]
    if(v[2] != '0'):
        print(name)
