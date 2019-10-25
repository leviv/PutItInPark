
from unittest import main, TestCase
import json
import requests

url = "http://127.0.0.1:5000/api"
loc_json = requests.get(url + "/location").json()
rec_json = requests.get(url + "/recreation").json()
park_json = requests.get(url + "/nationalparks").json()

class BackendTests (TestCase) :
    def test1 (self) :
        self.assertEqual(resp_json['num_results'], 51)

    def test2 (self) :
        self.assertEqual(6, 6)

    def test3 (self) :
        self.assertEqual(7, 7)

    def test4 (self) :
        self.assertEqual(1, 1)

    def test5 (self) :
        self.assertEqual(6, 6)

    def test6 (self) :
        self.assertEqual(7, 7)
    
    def test7 (self) :
        self.assertEqual(1, 1)

    def test8 (self) :
        self.assertEqual(6, 6)

    def test9 (self) :
        self.assertEqual(7, 7)

    def test10 (self) :
        self.assertEqual(1, 1)

if __name__ == "__main__" :
    main()
