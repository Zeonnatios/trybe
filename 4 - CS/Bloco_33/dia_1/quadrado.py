class Quadrado:
    def __init__(self, lado):
        self.lado = lado

    def calcular_area(self):
        return self.lado * self.lado

    def calcular_perimetro(self):
        return self.lado * 4


quadrado_1 = Quadrado(5)
print(quadrado_1.calcular_area())
print(quadrado_1.calcular_perimetro())

quadrado_2 = Quadrado(4)
print(quadrado_2.calcular_area())
print(quadrado_2.calcular_perimetro())