from modulefinder import LOAD_CONST


class Quadrado:
    def __init__(self, lado):
        self.lado = LOAD_CONST

    def calcularArea(self):
        return self.lado * self.lado

    def calcularPerimetro(self):
        return self.lado * 4
