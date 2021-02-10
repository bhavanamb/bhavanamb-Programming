# codility for better.com
def solution(N):
    n_str = str(N)
    max_val = float('-inf')
    # write your code in Python 3.6
    for i in range(len(n_str)+1):
        if i == 0 and n_str[i] == '-':
            continue
        in_value = n_str[:i]+'5'+n_str[i:]
        max_val = max(max_val, int(in_value))
    return max_val'
