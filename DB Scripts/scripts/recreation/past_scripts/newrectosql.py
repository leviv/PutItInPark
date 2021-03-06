def alter_text(text):
    res = ''
    for c in text :
        if c == '\'':
            res += '\'\''
        else:
            res += c 
    return res

file = open("allnewrecinfo.txt", "r")

for line in file:
    v = line.split("|")
    rec_id =v[0]
    rec_name = alter_text(v[1]).strip('-')
    loc = v[2]
    park = v[3]
    res = v[4]
    lat = v[5]
    lon = v[6]
    description = alter_text(v[7]).strip()
    parent_org = v[8]
    staylimit = v[9]
    num_activities = v[10]
    activities = str(v[11])
    imglink = str(v[12]).strip()

    command = 'INSERT INTO recreation (rec_id, rec_name, location, natpark, reservable, lat, lon, activities, imglink, num_activities, description, par_org_id, stay_limit) values ('
    values = "\'" + str(rec_id) + "\',\'" + str(rec_name) + "\',\'" + str(loc) + "\',\'" + str(park) + '\',' + str(res) + ", " + str(lat) + ', ' + str(lon) + ', \'' + str(activities) + '\',\'' + str(imglink) + '\', ' + str(num_activities) + ', \'' + str(description) + '\',\'' + str(parent_org) + '\',' + str(staylimit) + ');'
    print(command + values)

file.close()