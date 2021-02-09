def missing_integer(A):
    A = sorted(A)
    min = 1
    for i in range(1, max(A)):
        if i == min:
            i += 1
        else:
            return i


miss_val = missing_integer([1, 4, 5, 3])

print(miss_val)
