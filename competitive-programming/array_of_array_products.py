def array_of_array_products(arr):
    arr_len = len(arr)
    product = 1
    product_not = 1
    if not arr or len(arr) == 1:
        return []
    for i in range(arr_len):
        #product = product * arr[i]
        if arr[i] != 0:
            product_not = product_not * arr[i]
        else:
            product = 0

    for j in range(arr_len):
        if arr[j] == 0:
            arr[j] = product_not
        else:
            if product == 0:
                arr[j] = 0
            else:
                arr[j] = product_not//arr[j]

    return arr
