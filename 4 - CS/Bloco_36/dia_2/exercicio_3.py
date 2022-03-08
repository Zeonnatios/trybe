produtos = [1, 3, 1, 1, 2, 3]


def combinacoes(produtos):
    answer = 0
    i = 0
    size = len(produtos)
    for i in range(size):
        for j in range(i + 1, size):
            if produtos[i] == produtos[j]:
                answer += 1


result = combinacoes(produtos=produtos)

print(result)
