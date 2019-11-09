from unittest import main, TestCase
import json
import requests

url = "https://flask-backend-dot-potent-retina-254722.appspot.com/api"
loc_json = requests.get(url + "/locations?results_per_page=12").json()
rec_json = requests.get(url + "/recreations?results_per_page=12").json()
park_json = requests.get(url + "/nationalparks?results_per_page=12").json()


class BackendTests(TestCase):
    def test1(self):
        self.assertEqual(len(loc_json["objects"]), 12)

    def test2(self):
        self.assertEqual(len(rec_json["objects"]), 11)

    def test3(self):
        self.assertEqual(len(park_json["objects"]), 12)

    def test4(self):
        query = {"filters": [{"name": "num_parks", "op": "eq", "val": 0}]}
        qurl = url + "/locations?results_per_page=12&q=" + json.dumps(query)
        filtered_states = requests.get(qurl).json()
        self.assertEqual(len(filtered_states["objects"]), 12)
        states = filtered_states["objects"]
        noParks = True
        for state in states:
            if state["num_parks"] != 0:
                noParks = False
        self.assertTrue(noParks)

    def test5(self):
        query = {"filters": [{"name": "fee", "op": "neq", "val": 0}]}
        qurl = url + "/nationalparks?results_per_page=12&q=" + json.dumps(query)
        filtered_parks = requests.get(qurl).json()
        self.assertEqual(len(filtered_parks["objects"]), 12)
        parks = filtered_parks["objects"]
        notFree = True
        for park in parks:
            if park["fee"] == 0:
                notFree = False
        self.assertTrue(notFree)

    def test6(self):
        query = {"filters": [{"name": "num_activities", "op": "le", "val": 5}]}
        qurl = url + "/recreations?results_per_page=12&q=" + json.dumps(query)
        filtered_recs = requests.get(qurl).json()
        self.assertEqual(len(filtered_recs["objects"]), 12)
        recs = filtered_recs["objects"]
        acts = True
        for rec in recs:
            if rec["num_activities"] > 5:
                acts = False
        self.assertTrue(acts)

    def test7(self):
        url = 'https://flask-backend-dot-potent-retina-254722.appspot.com/api/locations?results_per_page=12&q={"filters":[],"order_by":[{"field":"name","direction":"desc"}]}&page=1'
        sorted_states = requests.get(url).json()
        self.assertEqual(len(sorted_states["objects"]), 12)
        states = sorted_states["objects"]
        self.assertEqual(states[0]["name"], "Wyoming")

    def test8(self):
        url = 'https://flask-backend-dot-potent-retina-254722.appspot.com/api/locations?results_per_page=12&q={"filters":[],"order_by":[{"field":"name","direction":"asc"}]}&page=1'
        sorted_states = requests.get(url).json()
        self.assertEqual(len(sorted_states["objects"]), 12)
        states = sorted_states["objects"]
        self.assertEqual(states[0]["name"], "Alabama")

    def test9(self):
        url = 'https://flask-backend-dot-potent-retina-254722.appspot.com/api/nationalparks?results_per_page=12&q={"filters":[],"order_by":[{"field":"park_name","direction":"desc"}]}&page=1'
        sorted_parks = requests.get(url).json()
        self.assertEqual(len(sorted_parks["objects"]), 12)
        parks = sorted_parks["objects"]
        self.assertEqual(parks[0]["park_name"], "Zion")

    def test10(self):
        url = 'https://flask-backend-dot-potent-retina-254722.appspot.com/api/nationalparks?results_per_page=12&q={"filters":[],"order_by":[{"field":"park_name","direction":"asc"}]}&page=1'
        sorted_parks = requests.get(url).json()
        self.assertEqual(len(sorted_parks["objects"]), 12)
        parks = sorted_parks["objects"]
        self.assertEqual(parks[0]["park_name"], "Acadia")

    def test11(self):
        url = 'https://flask-backend-dot-potent-retina-254722.appspot.com/api/recreations?results_per_page=12&q={"filters":[],"order_by":[{"field":"rec_name","direction":"desc"}]}&page=1'
        sorted_recs = requests.get(url).json()
        self.assertEqual(len(sorted_recs["objects"]), 12)
        parks = sorted_recs["objects"]
        self.assertEqual(parks[0]["rec_name"], "Zorinsky-Lake")

    def test12(self):
        url = 'https://flask-backend-dot-potent-retina-254722.appspot.com/api/recreations?results_per_page=12&q={"filters":[],"order_by":[{"field":"rec_name","direction":"asc"}]}&page=1'
        sorted_recs = requests.get(url).json()
        self.assertEqual(len(sorted_recs["objects"]), 12)
        parks = sorted_recs["objects"]
        self.assertEqual(parks[0]["rec_name"], "Acadia-National-Park")


if __name__ == "__main__":
    main()
