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
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

# ou

min_rating = 3.0
filtered_restaurants = [restaurant
                        for restaurant in restaurants
                        if restaurant["nota"] > min_rating]
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

# min_rating = 3.0
# aqui pedimos somente o nome do restaurante
# filtered_restaurants = [restaurant["name"]
#                        for restaurant in restaurants
#                        if restaurant["nota"] > min_rating]
# print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

# Anota ai: Em alguns casos, podemos ainda querer percorrer uma sequência
# numérica, e para isto iteramos sobre a estrutura de dados range.
for index in range(5):
    print(index)
