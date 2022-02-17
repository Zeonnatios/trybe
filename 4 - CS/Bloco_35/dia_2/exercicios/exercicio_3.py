# Exercício 3: Crie um algoritmo recursivo que encontre,
# em uma lista, o maior número inteiro.


def maiorinteiro_aux(lista, tamanho):
    if tamanho == 1:
        return lista[0]

    maior_do_resto_da_lista = maiorinteiro_aux(lista, tamanho - 1)
    if maior_do_resto_da_lista > lista[tamanho - 1]:
        return maior_do_resto_da_lista
    else:
        return lista[tamanho - 1]


def maiorinteiro(lista):
    tamanho = len(lista)
    return maiorinteiro_aux(lista, tamanho)


print(maiorinteiro([1, 21, 30, 4, 57, 22, 5, 10, 5, 9]))
