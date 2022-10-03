for count in range(0,151):
    print(count)
print("#"*8)
for x in range(5, 1001, 5):
    print(x)
print("#"*20)
for x in range(1,101):
    if x % 10 == 0:
        print("Coding Dojo")
    elif x % 5 == 0:
        print("Coding")
    else:
        print(x)
print("#"*28)
sum = 0
for x in range(1,500001,2):
    sum+=x
print(sum)
print("#"*32)
for count in range(2018,1,-4):
    print(count)
print("#"*44)
lowNum = 4
highNum = 22
mult = 2
for count in range(lowNum,highNum):
    if count % mult:
        print(count)