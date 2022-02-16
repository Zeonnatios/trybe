def reverse_cord(list):
    reverse = []
    count = len(list) - 1
    for index in list:
        reverse.append(list[count])
        count -= 1
    return reverse


my_list = [1, 2, 3, 4, 5, 6, 7]
print(reverse_cord(my_list))
