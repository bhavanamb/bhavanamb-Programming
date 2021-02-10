# codility for better.com
def solution(S, K):
    # write your code in Python 3.6
    days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    s_index = days.index(S)

    day_in = (s_index+K) % len(days)

    return days[day_in]
