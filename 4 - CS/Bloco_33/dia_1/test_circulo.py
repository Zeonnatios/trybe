from circulo import Circulo


def test_circulo():
    circulo_1 = Circulo(5)
    assert circulo_1.raio == 5
    assert circulo_1.PI == 3.14159
    assert circulo_1.calcular_area() == 78.53975
    assert circulo_1.calcular_perimetro() == 31.4159