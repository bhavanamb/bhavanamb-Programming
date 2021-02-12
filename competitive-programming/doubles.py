def twiceNumber(in_arr):
    doubles = [2*i for i in in_arr if in_arr.count(2*i) == 1 and 2*i in in_arr]
    print(doubles)


arr = [0, 1, 2, 3, 4, 8, 6, 8, 5]
twiceNumber(arr)
