# Transforme o algoritmo criado do exercicio 1 em recursivo.


def conta_pares(n):
    if n == 1:
        return 0
    if n % 2 == 0:
        return 1 + conta_pares(n - 1)
    else:
        return conta_pares(n - 1)


result = conta_pares(10)
print(result)
