# Exercício 1: Dada uma lista, descubra o menor elemento.
# Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.
def menor_elemento(lista):
    menor_elemento = lista[0]
    for elemento in lista:
        if elemento < menor_elemento:
            menor_elemento = elemento
    return menor_elemento


print(menor_elemento([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))


# ou
def minimum(numbers):
    return min(numbers)


print(minimum([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))

# ou mesmo
minimum = min


print(minimum([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))


# Exercício 2: Faça um programa que, dado um valor n qualquer,
# tal que n > 1, imprima na tela um triângulo retângulo com n asteriscos de
# base. Por exemplo, para n = 5 o triângulo terá 5 asteriscos na base:

# Copiar
# n = 5

# *
# **
# ***
# ****
# *****
def triangulo(n):
    for i in range(1, n + 1):
        print('*' * i)


triangulo(10)


# Exercício 3: Crie uma função que receba um número inteiro N e retorne o
# somatório de todos os números de 1 até N. Por exemplo,
# para N = 5, o valor esperado será 15.
def somatorio(n):
    soma = 0
    for i in range(1, n + 1):
        soma += i
    return soma


print(somatorio(5))


# Dica: a função sum já existe nativamente no Python!
def somatorio(n):
    return sum(range(1, n + 1))


print(somatorio(5))


# Exercício 4: Um posto está vendendo combustíveis com a seguinte tabela de
# descontos:

# Copiar
#   Álcool:
#     - Até 20 litros, desconto de 3% por litro;
#     - Acima de 20 litros, desconto de 5% por litro.
#   Gasolina:
#     - Até 20 litros, desconto de 4% por litro;
#     - Acima de 20 litros, desconto de 6% por litro.
# Escreva uma função que receba o número de litros vendidos,
# o tipo de combustível
# (codificado da seguinte forma: A - álcool, G - gasolina),
# e retorne o valor a ser pago pelo cliente, sabendo-se que o preço do litro da
# gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.
def fuel_price(type, liters):
    if type == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif type == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total -= total * discount
    return total


print(fuel_price('G', 20))
print(fuel_price('G', 40))
print(fuel_price('A', 20))
print(fuel_price('A', 40))
