from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.keys import Keys
from unittest import main, TestCase
import time

# URL to test on
url = "http://localhost:3000/"

# Test Class
class guitests(TestCase):

  @classmethod
  def setUp(self):
    webdriver.ChromeOptions().add_argument('--no-sandbox')
    self.browser = webdriver.Chrome('/Users/levivillarreal/Downloads/chromedriver')
    self.url = url

  @classmethod
  def tearDown(self):
    self.browser.close()

  def test_site_title(self):
    self.browser.get(self.url)
    self.assertEqual(self.browser.title, "Put It In Park")

  def test_splash(self):
    try:
      self.browser.get(self.url)
      header = self.browser.find_element_by_css_selector("h1")
      self.assertEqual(header.text, "PUT IT IN PARK")
    except NoSuchElementException as err:
      self.fail(err.msg)

  def test_navbar_about(self):
    try:
      self.browser.get(self.url)
      about_link = self.browser.find_element_by_css_selector(".about-link h5")
      self.assertEqual(about_link.text, "ABOUT")
      about_link.click()
      self.assertEqual(self.browser.current_url, self.url+"about/")
    except NoSuchElementException as err:
      self.fail(err.msg)

  def test_navbar_parks(self):
    try:
      self.browser.get(self.url)
      parks_link = self.browser.find_element_by_css_selector(".parks-link h5")
      self.assertEqual(parks_link.text, "NATIONAL PARKS")
      parks_link.click()
      self.assertEqual(self.browser.current_url, self.url+"parks/")
    except NoSuchElementException as err:
      self.fail(err.msg)

  def test_navbar_recs(self):
    try:
      self.browser.get(self.url)
      rec_link = self.browser.find_element_by_css_selector(".recs-link h5")
      self.assertEqual(rec_link.text, "RECREATION")
      rec_link.click()
      self.assertEqual(self.browser.current_url, self.url+"recreation/")
    except NoSuchElementException as err:
      self.fail(err.msg)

  def test_navbar_states(self):
    try:
      self.browser.get(self.url)
      states_link = self.browser.find_element_by_css_selector(".states-link h5")
      self.assertEqual(states_link.text, "STATES")
      states_link.click()
      self.assertEqual(self.browser.current_url, self.url+"states/")
    except NoSuchElementException as err:
      self.fail(err.msg)

  def test_about_page(self):
    try:
      self.browser.get(self.url + "about")
      about_title = self.browser.find_element_by_css_selector(".model-intro h2")
      self.assertEqual(about_title.text, "ABOUT")
    except NoSuchElementException as err:
      self.fail(err.msg)

  def test_parks_page(self):
    try:
      self.browser.get(self.url + "parks")
      parks_title = self.browser.find_element_by_css_selector(".model-intro h2")
      self.assertEqual(parks_title.text, "NATIONAL PARKS")
    except NoSuchElementException as err:
      self.fail(err.msg)

  def test_recreation_page(self):
    try:
      self.browser.get(self.url + "recreation")
      activities_title = self.browser.find_element_by_css_selector(".model-intro h2")
      self.assertEqual(activities_title.text, "ACTIVITIES")
    except NoSuchElementException as err:
      self.fail(err.msg)

  def test_states_page(self):
    try:
      self.browser.get(self.url + "states")
      states_title = self.browser.find_element_by_css_selector(".model-intro h2")
      self.assertEqual(states_title.text, "STATES")
    except NoSuchElementException as err:
      self.fail(err.msg)

# Main Method
if __name__ == '__main__':
	main()
