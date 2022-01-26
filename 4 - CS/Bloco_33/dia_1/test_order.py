from order import Item, Order
from pytest import approx

hamburger = Item("X-Burger", 19.90)
cola = Item("Coca-cola - 600ml", 4.99)
hot_dog = Item(name="Hot-Dog", price=9.99)
mock_itens = [hamburger, cola, hot_dog]
client = "Matheus Antonio"
payment = "Cartão de crédito"
discount = 0.1


def test_order():
    my_order = Order(client, mock_itens, payment, discount)

    assert my_order.client == client
    assert my_order.items == mock_itens
    assert my_order.payment == payment
    assert my_order.discount == discount
    assert approx(my_order.calculate_total_price(), 0.1) == 34.88
    assert approx(my_order.calculate_total_price_with_discount(), 0.1) == 31.39
