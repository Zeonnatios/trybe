def triangle(sideA, sideB, sideC):
    if sideA == sideB and sideB == sideC:
        return "Triângulo Equilátero: três lados iguais."
    elif sideA == sideB or sideB == sideC or sideA == sideB:
        return "Triângulo Isósceles: quaisquer dois lados iguais."
    elif sideA != sideB and sideB != sideC and sideA != sideB:
        return "Triângulo Escaleno: três lados diferentes."
    return "Não é um triângulo!"


print(triangle(1, 2, 3))
print(triangle(2, 2, 2))
print(triangle(1, 1, 2))
