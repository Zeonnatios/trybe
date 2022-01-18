fruits_list = ["orange", "apple", "grape", "pineapple"]
# elementos são definidos separados por vírgula, envolvidos por colchetes
print(fruits_list)
print(fruits_list[0])  # o acesso é feito por indices iniciados em 0

print(fruits_list[-1])  # o acesso também pode ser negativo

fruits_list.append("banana")  # adicionando uma nova fruta

fruits_list.remove("pineapple")  # removendo uma fruta

fruits_list.extend(["pear", "melon", "kiwi"])
# acrescenta uma lista de frutas a lista original

print(fruits_list.index("grape"))
# retorna o índice onde a fruta está localizada, neste caso 2 em seu programa

fruits_list.sort()  # ordena a lista de frutas
print(fruits_list)
