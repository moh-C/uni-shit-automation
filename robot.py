from golestan import Golestan
from time import sleep
from datetime import datetime


username = '95242014'
password = '95242014'

units = ['420103020', '420106521', '420105620', '420107521']
robot = Golestan(username, password, units)
robot.login().goToPishkhaan()
counter = 0
for _ in range(50):
    time_1 = datetime.now()
    robot.goToMainEntekhaabVahed().fillT01rows().exitFormSabtename().garbageCollection()
    time_2 = datetime.now()
    print(time_1 - time_2)
    sleep(1)
    counter += 1

# robot.login().goToPishkhaan().goToMainEntekhaabVahed()
print('fuck golestan')