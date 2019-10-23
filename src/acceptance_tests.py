from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from unittest import main, TestCase
import time

# URL to test on
url = "http://localhost:3000/"

# Test Class
class AcceptanceTests(TestCase):

  @classmethod
  def setUp(self):
    self.browser = webdriver.Chrome('/Users/levivillarreal/Downloads/chromedriver')
    self.url = url

  @classmethod
  def tearDown(self):
    self.browser.close()

  def test_site_title(self):
      self.browser.get(self.url)
      self.assertEqual(self.browser.title, "Put It In Park")

# Main Method
if __name__ == '__main__':
	main()
