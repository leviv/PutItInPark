from unittest import main, TestCase
import json
import requests

url = "https://flask-backend-dot-potent-retina-254722.appspot.com"
loc_json = requests.get(url + "/locations").json()
rec_json = requests.get(url + "/recreations").json()
park_json = requests.get(url + "/nationalparks").json()

class BackendTests(TestCase):
    def test1(self):
        self.assertEqual(len(loc_json), 50)

if __name__ == "__main__":
    main()
