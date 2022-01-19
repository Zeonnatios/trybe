restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
print(filtered_restaurants)
# imprime a lista de restaurantes, sem o B e D

min_rating = 3.0
filtered_restaurants = [
    restaurant for restaurant in restaurants if restaurant["nota"] > min_rating
]
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D


n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next


number = 5
counter = 1
result = 1

while counter <= number:
    result = result * counter
    counter += 1
result
print(result)

ratings = [6, 8, 5, 9, 10]
ratings_resolve = []

for rating in ratings:
    ratings_resolve.append(rating * 10)
print(ratings_resolve)

ratings = [6, 8, 5, 9, 10]
new_ratings = [rating * 10 for rating in ratings]
print("lista de compreensão", new_ratings)


for rating in ratings_resolve:
    if rating % 3 == 0:
        print(rating, "é multiplo de 3")
