
def solution(A):
    # write your code in Python 3.6
    pos = [False]*(len(A)+1)
    for i in A:
        if i in range(1, len(A)+1):
            pos[i-1] = True
    for i in range(len(pos)+1):
        if pos[i] == False:
            return i+1
    return 1


miss_val = solution([1, 4, 5, 10, 11, 9, 23, 34, 2, 6, 7, 7, 3])

print(miss_val)
