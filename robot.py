from golestan2 import Golestan
username = '95242014'
password = '95242014'

units = ['420103020', '420106521', '420105620', '420107521']
robot = Golestan(username, password, units)
robot.login().goToPishkhaan().goToMainEntekhaabVahed().fillT01rows()
# robot.login().goToPishkhaan().goToMainEntekhaabVahed()
print('fuck golestan')