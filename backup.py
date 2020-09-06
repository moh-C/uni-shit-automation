from selenium import webdriver
from os import path
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import events
from time import sleep
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
# enter unit ids that you want to take first

class Golestan:
    def __init__(self, username, password, units):
        # cap = DesiredCapabilities().FIREFOX
        # cap["marionette"] = False
        # self.driver = webdriver.Firefox(capabilities=cap, executable_path="C:\\Users\\moham\\Desktop\\GitHub\\Golestan_selenium_driver\\geckodriver.exe")
        self.driver = webdriver.Chrome(
            path.join(path.dirname(__file__), 'chromedriver.exe'))
        self.driver.delete_all_cookies()
        self.waiter = WebDriverWait(self.driver, 300)
        self.username = username
        self.password = password
        self.units = units
        self.time = '13:56:00'

    def fillT01rows(self):
        self.driver.switch_to.default_content()
        self.waiter.until(
            EC.frame_to_be_available_and_switch_to_it((By.XPATH, '/html/body/div[9]/iframe')))
        self.waiter.until(
            EC.frame_to_be_available_and_switch_to_it((By.NAME, 'Master')))
        self.waiter.until(
            EC.frame_to_be_available_and_switch_to_it((By.NAME, 'Form_Body')))
        sleep(2)
        self.driver.execute_script(open("./index.js").read())
        

        return self

    def setTime(self, time):
        self.time = time
        return self

    def login(self):
        self.driver.get(
            "https://golestan.sbu.ac.ir/Forms/AuthenticateUser/main.htm")
        inLogin = True
        while (inLogin):
            try:
                self.waiter.until(
                    EC.frame_to_be_available_and_switch_to_it((By.ID, 'Faci1')))
                self.waiter.until(
                    EC.frame_to_be_available_and_switch_to_it((By.NAME, 'Master')))
                self.waiter.until(
                    EC.frame_to_be_available_and_switch_to_it((By.NAME, 'Form_Body')))
                self.waiter.until(EC.element_to_be_clickable(
                    (By.ID, 'F80351'))).send_keys(self.username)
                
                self.waiter.until(EC.element_to_be_clickable(
                    (By.XPATH, '//*[@id="dsetting"]/span'))).click()
                
                self.waiter.until(EC.element_to_be_clickable(
                    (By.XPATH, '//*[@id="DisbOthrs"]'))).click()

                sleep(10)

                self.driver.find_element_by_id(
                    'F80401').send_keys(self.password + Keys.ENTER)

                inLogin = False
            except TimeoutException:
                inLogin = True
        return self

    def goToPishkhaan(self):
        time = True
        while (time):
            try:
                self.waiter.until(
                    EC.frame_to_be_available_and_switch_to_it((By.ID, 'Faci2')))
                self.waiter.until(
                    EC.frame_to_be_available_and_switch_to_it((By.NAME, 'Master')))
                self.waiter.until(
                    EC.frame_to_be_available_and_switch_to_it((By.NAME, 'Form_Body')))
                self.waiter.until(EC.element_to_be_clickable(
                    (By.XPATH, '/html/body/table[1]/tbody/tr[3]/td[1]/table/tbody/tr/td[5]/nobr'))).click()
                time = False
            except TimeoutException:
                time = True
        return self

    def goToMainEntekhaabVahed(self):
        # x = self.toSeconds(self.time) - \
        #     self.toSeconds(self.getSiteTime())
        # print(x)
        # sleep(x)
        sleep(1)
        time = True
        while(time):
            try:
                self.driver.switch_to.default_content()
                self.waiter.until(
                    EC.frame_to_be_available_and_switch_to_it((By.ID, 'Faci3')))
                self.waiter.until(
                    EC.frame_to_be_available_and_switch_to_it((By.NAME, 'Master')))
                self.waiter.until(
                    EC.frame_to_be_available_and_switch_to_it((By.NAME, 'Form_Body')))
                self.waiter.until(EC.element_to_be_clickable(
                    (By.CSS_SELECTOR, 'div #accordion2 label:nth-child(3)'))).click()
                sleep(1)
                self.waiter.until(EC.element_to_be_clickable(
                    (By.ID, 'L1'))).click()
                time = False
            except TimeoutException:
                time = True
        return self

    def getSiteTime(self):
        self.driver.switch_to.default_content()
        time = self.waiter.until(EC.visibility_of_element_located((By.CSS_SELECTOR, '#\_mt_bou > div:nth-child(5)'))).text
        return time.split(' ')[0]
    
    def exit(self):
        # self.driver.switch_to.default_content()
        self.driver.execute_script('document.querySelector("#_mt_usr > span").click()')
    
    def taqir_group(self):
        self.driver.execute_script(open("./taqirGroup.js").read())
        

    def toSeconds(self, t):
        h = int(t.split(':')[0])
        m = int(t.split(':')[1])
        s = int(t.split(':')[2])
        return h * 3600 + m * 60 + s


# from golestan import Golestan
username = '95242014'
password = '95242014'

units = ['350170201', '350170201', '350170201', '350170201']
robot = Golestan(username, password, units)

robot.login().goToPishkhaan().goToMainEntekhaabVahed().fillT01rows()

print("Entering the loop")
for _ in range(500):
    robot.goToPishkhaan().goToMainEntekhaabVahed()

print('Going to exit')
robot.exit()
# robot.login().goToPishkhaan().goToMainEntekhaabVahed()
print('fuck golestan')