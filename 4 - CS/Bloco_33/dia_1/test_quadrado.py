from quadrado import Quadrado


def test_quadrado():
    quadrado_1 = Quadrado(5)

    assert quadrado_1.lado == 5
    assert quadrado_1.calcular_area() == 25
    assert quadrado_1.calcular_perimetro() == 20
