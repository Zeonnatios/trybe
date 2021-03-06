# Crie um algoritmo não recursivo para contar
# quantos números pares existem em uma sequência numérica (1 a n).


def count_pairs_numbers(n):
    count = 0
    list = [i for i in range(n + 1)]
    for index in list:
        if index % 2 == 0 and index != 0:
            count += 1
    return count


result = count_pairs_numbers(10)
print(result)


# ou


def conta_pares(n):
    numero_de_pares = 0
    for num in range(n + 1):
        if num % 2 == 0 and num != 0:
            numero_de_pares += 1
    return numero_de_pares


print(conta_pares(10))
