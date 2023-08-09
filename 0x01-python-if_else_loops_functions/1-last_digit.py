#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)

if number > 0:
    num = number % 10
else:
    num = number % -10

print("Last digit of {:d} is {:d}".format(number, num), end=" ")

if num == 0:
    print("and is 0")
elif number < 0 or num < 6:
    print("and is less than 6 and not 0")
else:
    print("and is greater than 5")
