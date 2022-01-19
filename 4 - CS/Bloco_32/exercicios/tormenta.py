from random import randint

dice_roll = randint(1, 20)

pantheon_of_arton = [
    {"nome": "Wyna", "domínio": "Magia"},
    {"nome": "Nimb", "domínio": "Sorte"},
    {"nome": "Ahadarak", "domínio": "Tormenta"},
]

print(pantheon_of_arton)
print(dice_roll)

if dice_roll == 1:
    print("Vixi, que azar... kkkkk")
elif dice_roll >= 2 and dice_roll <= 15:
    print("Ahadarak porque me atormentas!")
elif dice_roll >= 16 and dice_roll <= 19:
    print("Obrigado pela sorte, Nimb!")
else:
    print("Sorte máxima")

dominios = []

for god in pantheon_of_arton:
    dominios.append(god["domínio"])
print(dominios)

domains = [god for god in pantheon_of_arton if god["domínio"] != "Tormenta"]
print(domains)
domains = [
    god["domínio"] for god in pantheon_of_arton if god["domínio"] != "Tormenta"
]
print(domains)
