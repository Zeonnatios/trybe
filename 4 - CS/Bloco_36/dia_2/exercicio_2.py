cartas = [1, 4, 4, 7, 6, 6, 9, 10]


def embaralhar_cartas(cartas):
    embaralhado = []
    array_length = len(cartas) // 2
    for index in range(array_length):
        embaralhado.append(cartas[index])
        embaralhado.append(cartas[index + array_length])
    return embaralhado


result = embaralhar_cartas(cartas=cartas)

print(result)
