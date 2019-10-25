
from unittest import main, TestCase
import json
import requests

url = "http://127.0.0.1:5000/api"
loc_json = requests.get(url + "/location").json()
rec_json = requests.get(url + "/recreation").json()
park_json = requests.get(url + "/nationalparks").json()

class BackendTests (TestCase) :
    def test1 (self) :
        self.assertEqual(loc_json['num_results'], 51)

    def test2 (self) :
        self.assertEqual(loc_json['objects'][0]['name'], 'Alabama')

    def test3 (self) :
        self.assertEqual(loc_json['objects'][1]['name'], 'Alabama')

    def test4 (self) :
        self.assertEqual(rec_json['num_results'], 210)

    def test5 (self) :
        self.assertEqual(rec_json['objects'][0]['location'], 'New-Mexico')

    def test6 (self) :
        self.assertEqual(rec_json['objects'][1]['location'], 'Alaska')
    
    def test7 (self) :
        self.assertEqual(park_json['num_results'], 49)

    def test8 (self) :
        self.assertEqual(park_json['objects'][0]['location'], 'Maine')

    def test9 (self) :
        self.assertEqual(park_json['objects'][1]['location'], 'Utah')

    def test10 (self) :
        self.assertEqual(park_json['objects'][2]['location'], 'South-Dakota')

if __name__ == "__main__" :
    main()
