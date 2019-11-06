import urllib.request, json
import requests

file = open("allrecinfo.txt", "r")

leftover = ''

for line in file:
    orig = line
    v = line.split("|")
    rec_name = v[1].strip()

    subscription_key = 'KEY'
    search_url = "https://api.cognitive.microsoft.com/bing/v7.0/images/search"
    search_term = rec_name.replace("-", " ")

    headers = {"Ocp-Apim-Subscription-Key" : subscription_key}
    params  = {"q": search_term, "license": "public", "imageType": "photo", "safeSearch" : "Strict", "count" : "30"}

    response = requests.get(search_url, headers=headers, params=params)
    response.raise_for_status()
    search_results = response.json()
    pics = search_results.get("value")
    found = False
    for pic in pics:
        if pic != '':
            pastImg = 'https://static.vecteezy.com/system/resources/previews/000/052/492/original/under-construction-vector.jpg'
            print(orig.replace(pastImg, pic.get('contentUrl')).strip())
            found = True
            break
    if not found:
        leftover += orig + '\n'

print('LEFTOVER:')
print(leftover)
    


file.close()