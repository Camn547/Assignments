# 1.) Operators

# 1.) 11
# 2.) 3
# 3.) 1
# 4.) 9

num1 = 10
if (num1 % 5 == 0) and (num1 % 3 == 0):
    print(num1, "is divisible by both 3 and 5")
else:
    print("no")




# 2.) Functions
num2 = 13
def square_and_cube(num2):
    sqr = num2 * num2
    cub = (num2 * num2) * num2
    print("squared: ",sqr,", Cubed: ",cub,)

square_and_cube(num2)

name = "cam"
# # Mistake
def greet_user(name):
    return "Hello" + name

# # fixed
def greet_user(name):
    print ("Hello" , name)

greet_user(name);





# # 3.) Loops
for x in range(1 , 21):
    if x % 2 == 0:
        print(x)

i = 1
while i > 0:
    useri = input("What")
    if useri == "exit":
        break
    else:
        useri = int(useri)
        if useri % 2 == 1:
            print(useri, " is odd")
        elif useri % 2 == 0:
            print(useri, "is even")
    