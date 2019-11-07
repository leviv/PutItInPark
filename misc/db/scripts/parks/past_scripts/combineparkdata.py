parkdata = open("parksscriptresult.txt", "r")
recdata = open("relatedrecareas.txt", "r")

for park in parkdata:
    recinfo = next(recdata)
    values = recinfo.split(" ")
    count = str(values[1]).strip()
    rec_ids = str(values[2]).strip()
    print(park.strip() + '|' + count + '|' + rec_ids)

parkdata.close()
recdata.close()
    