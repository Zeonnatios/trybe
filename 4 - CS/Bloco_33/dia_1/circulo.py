class Circulo:
    PI = 3.14159

    def __init__(self, raio):
        self.raio = raio

    def calcular_area(self):
        return self.PI * self.raio ** 2

    def calcular_perimetro(self):
        return 2 * self.PI * self.raio


circulo_1 = Circulo(5)
print(circulo_1.calcular_area())
print(circulo_1.calcular_perimetro())
