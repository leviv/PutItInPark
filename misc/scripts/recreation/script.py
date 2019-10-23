file = open("initialrecinfo.txt", "r")

for line in file:
    v = line.split("|")
    rec_id =v[0]
    rec_name = v[1]
    loc = v[2]
    park = v[3]
    res = v[4]
    lat = v[5]
    lon = v[6]
    desc = v[7]
    parent_org = v[8]
    staylimit = v[9]

file.close()