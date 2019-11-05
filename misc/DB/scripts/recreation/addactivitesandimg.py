#retrieve rec activities, num of rec activities, and images
import urllib.request, json
file = open("newrecinfo.txt", "r")

for line in file:
    prev_info = str(line)
    values = line.split('|')
    rec_id = values[0]
    rec_name = values[1]
    #retrieve activities info
    num_activities = 0
    activities = ''

    apikeyrec = '233a1540-c404-419b-b60c-ab4a096cc7d2'

    with urllib.request.urlopen('https://ridb.recreation.gov/api/v1/recareas/' + rec_id + '/activities?limit=50&offset=0?&apikey=' + apikeyrec) as url:
            result = json.loads(url.read().decode())
            num_activities = result.get('METADATA').get('RESULTS').get('CURRENT_COUNT')
            recdata = result.get('RECDATA')
            for act in recdata:
                pre_activity = act.get('ActivityName')
                activities += pre_activity.replace(' ', '-') + ','
    
    #next step - use image searching api to find images for all rec areas
    print(prev_info.strip(), end = "")
    print('|' + str(num_activities) + '|' + activities.strip(',') + "|" + 'https://static.vecteezy.com/system/resources/previews/000/052/492/original/under-construction-vector.jpg')



