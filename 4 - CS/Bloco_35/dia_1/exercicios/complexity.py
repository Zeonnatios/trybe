"""
Exercício 1 Dado um array de números de tamanho n, escreva um algoritmo que
retorna true se há no array um número duplicado e false caso contrário.
Analise a solução abaixo e diga qual é a ordem de complexidade desse algoritmo
para o melhor caso, pior caso e caso médio.
"""


def contains_duplicate(numbers):
    numbers.sort()
    previous_number = "not a number"
    for number in numbers:
        if previous_number == number:
            return True
        previous_number = number

    return False


array_1 = [1, 1, 2, 3, 4, 5, 6]
array_2 = [1, 2, 3, 4, 5, 6, 6]
array_3 = [1, 2, 3, 4, 5, 6]


print(contains_duplicate(array_1))
print(contains_duplicate(array_2))
print(contains_duplicate(array_3))

resp = "O método sort possui uma complexidade de O(n.logn),"
resp += ", e a função também há outra iteração de array, sendo O(n)."
resp += "Desse jeito, ficaria O(n log n)"
print(resp)


"""
Exercício 2 Suponha que se está escrevendo uma função
para um jogo de batalha naval.
Dado um array bidimensional com n linhas e m colunas,
e um par de coordenadas x para linhas e y para colunas,
o algoritmo verifica se há um navio na coordenada alvo. Por exemplo:

entrada = [ 0 0 0 0 1
 0 0 0 1
 1 1 1 1
 0 0 1 0 ]

resultado para (0, 4) = True
resultado para (1, 1) = False

Qual seria a ordem de complexidade da solução para este problema?
E a complexidade de espaço?
"""

""" Mesmo para um array bidimensional, o acesso a um elemento é O(1).
A complexidade de espaço também é O(1), pois não consideramos a entrada
em seu cálculo."""


def battleship(grid, line, column):
    if grid[line][column] == 1:
        return True

    return False
