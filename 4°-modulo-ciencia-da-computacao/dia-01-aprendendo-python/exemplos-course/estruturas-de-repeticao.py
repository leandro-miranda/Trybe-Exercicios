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

names_list = ['Duda', 'Rafa', 'Cris', 'Yuri']
new_names_list = [name for name in names_list if 'a' in name]

# Aqui o for percorre cada nome em "names_list", verifica se existe a letra "a"
# nele, o adiciona à variável "name",
# e então gera nossa nova lista "new_names_list"
print(new_names_list)

# Saída
['Duda', 'Rafa']

# O exemplo a seguir usa uma compreensão de listas para criar uma lista com o
# quadrado dos números entre 1 e 10.
# Isto é equivalente às operações de map e filter em JavaScript.
quadrados = [x*x for x in range(11)]
print(quadrados)

# Saída
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# WHILE
# O laço de repetição while acontecerá enquanto a condição for satisfeita.
n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next

# Em Python, um loop for geralmente é escrito como um loop sobre um objeto
# iterável. Isso significa que você não precisa de uma variável de contagem
# para acessar itens no iterável.
# Porém, às vezes, pode acontecer de você querer uma variável que muda em cada
# iteração do loop. Em vez de criar e incrementar uma variável você mesmo, você
# pode usar enumerate() do Python para obter um contador e o valor do iterável
# ao mesmo tempo!
languages = ['Python', 'Java', 'JavaScript']

enumerate_prime = enumerate(languages)

# converte um objeto enumerate em uma lista
print(list(enumerate_prime))

# Saída: [(0, 'Python'), (1, 'Java'), (2, 'JavaScript')]

# Você também pode desestruturar (unpack) os itens da lista ou tupla:
languages = ['Python', 'Java', 'JavaScript']

for index, language in enumerate(['Python', 'Java']):
    print(f'{index} - {language}')
# 0 - Python
# 1 - Java
# De olho na dica: na linha 4 você deve ter reparado algo diferente neste
# código print(f'{index} - {language}'). A letra f usada dentro do print é
# chamada de f-string. Ela fornece uma maneira de incorporar expressões dentro
# de strings literais, usando uma sintaxe mínima. Lembre-se de ler a
# documentação em caso de dúvidas.ída:

# Exercício 12
# O Fatorial de um número inteiro é representado pela multiplicação de todos os
# números predecessores maiores que 0. Por exemplo,
# o fatorial de 5 é 120 pois 5! = 1 * 2 * 3 * 4 * 5.
# Escreva um código que calcule o fatorial de um número inteiro.
number = 5
counter = 1
result = 1
while counter <= number:
    result *= counter
    counter += 1
print(result)
# Note que usamos counter += 1 pra incrementar o contador –
# não existe counter++. Da mesma forma, poderíamos ter atualizado o
# resultado com a expressão result *= counter.

# Uma versão mais pythonica dessa solução usaria range:
number = 5
result = 1
# Usamos number + 1 pro range ir até o number
for factor in range(1, number+1):
    result *= factor
print(result)

# Exercício 13
# Um sistema de avaliações registra valores de 0 a 10 para cada avaliação.
# Após algumas mudanças estes valores precisam ser ajustados para avaliações
# de 0 a 100. Dado uma sequência de avaliações ratings = [6, 8, 5, 9, 10].
# Escreva um código capaz de gerar as avaliações após a mudança. Neste caso o
# resultado deveria ser [60, 80, 50, 90, 100].
ratings = [6, 8, 5, 9, 10]
new_ratings = [rating * 10 for rating in ratings]
print(new_ratings)

# ou
ratings = [6, 8, 5, 9, 10]
new_ratings = []

for rating in ratings:
    new_ratings.append(rating * 10)

print(new_ratings)

# Exercício 14
# Percorra a lista do exercício 13 e imprima “Múltiplo de 3” se o elemento
# for divisível por 3.
ratings = [6, 8, 5, 9, 10]

for rating in ratings:
    # o sinal % representa a operação "resto".
    if (rating % 3) == 0:  # se o resto é zero, é divisível
        print(f'{rating} é múltiplo de 3')
    else:
        print(f'{rating} não é múltiplo de 3')

# ou

ratings = [6, 8, 5, 9, 10]

for rating in ratings:
    # o sinal % representa a operação "resto".
    if (rating % 3) == 0:  # se o resto é zero, é divisível
        print(f'{rating} é múltiplo de 3')
