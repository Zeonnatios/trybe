from retangulo import Retangulo


def test_retangulo():
    retangulo_1 = Retangulo(base=10, altura=12)

    assert (retangulo_1.base) == 10
    assert (retangulo_1.altura) == 12
    assert (retangulo_1.calcular_area()) == 120
    assert (retangulo_1.calcular_perimetro()) == 44
