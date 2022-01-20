def media(notas):
    total = 0
    for nota in notas:
        total += nota
    return total / len(notas)


print(media([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
