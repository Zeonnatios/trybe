class Retangulo:
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def calcular_area(self):
        return self.altura * self.base

    def calcular_perimetro(self):
        return 2 * (self.base + self.altura)


retangulo_1 = Retangulo(10, 14)
print(retangulo_1.calcular_area())
print(retangulo_1.calcular_perimetro())
