people_by_id = {1: "Cássio", 2: "João", 3: "Felipe"}
print(people_by_id)
# elementos no formato "chave: valor" separados por vírgula,
# envolvidos por chaves

people_by_name = {"Cássio": 1, "João": 2, "Felipe": 3}
print(people_by_name)
# outro exemplo, dessa vez usando strings como chaves
# (ao contrário de JS, as aspas duplas são obrigatórias)

# elementos são acessados por suas chaves
print(people_by_id[1])
print(people_by_name["João"])

# elementos podem ser removidos com a palavra chave del
del people_by_id[1]
del people_by_name["Cássio"]
print(people_by_id)
print(people_by_name)


print(people_by_id.items())
# people_by_id([(1, "Cássio"), (2, "João"), (3, "Felipe")])
# um conjunto é retornado com tuplas contendo chaves e valores


info = {
    "personagem": "Margarida",
    "origem": "Pato Donald",
    "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

print(info["personagem"])
info["recorrente"] = "Sim"
print(info)

del info["origem"]
print(info)
