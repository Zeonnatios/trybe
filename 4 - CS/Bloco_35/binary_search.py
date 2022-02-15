# A estrutura deve estar ordenada para que a busca binária funcione
data = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
]


def binary_search_iterative(array, element):
    mid = 0
    start = 0
    end = len(array)
    step = 0

    while start <= end:
        print(
            "Subarray in step {}: {}".format(step, str(array[start : end + 1]))
        )
        step = step + 1
        mid = (start + end) // 2

        if element == array[mid]:
            return mid

        if element < array[mid]:
            end = mid - 1
        else:
            start = mid + 1

    return -1


print(binary_search_iterative(data, 2))
print(binary_search_iterative(data, 17))
print(binary_search_iterative(data, 23))
