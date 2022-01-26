class Item:
    def __init__(self, name, price):
        self.name = name
        self.price = price


class Order:
    def __init__(self, client, items, payment, discount):
        self.client = client
        self.items = items
        self.payment = payment
        self.discount = discount

    def calculate_total_price(self):
        return sum([item.price for item in self.items])

    def calculate_total_price_with_discount(self):
        return self.calculate_total_price() * (1 - self.discount)

    def show_order(self):
        print(f"Client: {self.client}, Total: {self.calculate_total_price()}")


# teste
hamburger = Item("X-Burger", 19.90)
cola = Item("Coca-cola - 600ml", 4.99)
hot_dog = Item(name="Hot-Dog", price=9.99)
my_items = [hamburger, cola, hot_dog]

my_order = Order("Matheus Antonio", my_items, "credit card", 0.1)

print(my_order.calculate_total_price())
print(my_order.calculate_total_price_with_discount())
print(my_order.show_order())
