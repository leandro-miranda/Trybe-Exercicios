# 🚀 Exercício 1: Crie uma função que receba dois números e retorne o maior
# deles.
def maior_numero(numero1, numero2):
    if numero1 > numero2:
        return numero1
    return numero2


print(maior_numero(10, 20))


# 🚀 Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
def media(lista):
    soma = 0
    for numero in lista:  # p/ cada numero na lista
        soma += numero
    return soma / len(lista)


print(media([1, 2, 3, 4, 5]))


# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
# Por exemplo:

# Copiar
# n = 5

# *****
# *****
# *****
# *****
# *****
# 🦜Dica: Python sabe multiplicar sequências! Por exemplo, 3 * 'bla' resulta em
# blablabla. Isso se aplica a listas também, caso você precise.

# Sentiu aí um certo dejavu? 😁
def quadrado(n):
    for i in range(n):
        print(n * "*")


quadrado(5)


# 🚀 Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome
# com a maior quantidade de caracteres. Por exemplo,
# para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
# o retorno deve ser "Fernanda".

# 🦜 Uma dica: Utilize a função len() para verificar o tamanho do nome.
def maior_nome(nomes):
    maior_nome = nomes[0]
    for nome in nomes:
        if len(nome) > len(maior_nome):
            maior_nome = nome
    return maior_nome


print(maior_nome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))


# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3
# metros quadrados e que a tinta é vendida em latas de 18 litros,
# que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla
# contendo a quantidade de latas de tinta a serem compradas e o preço total a
# partir do tamanho de uma parede (em m²).
def calcula_quantidade_e_preco(tamanho_parede):
    quantidade_latas = tamanho_parede / (18 * 3)
    preco_total = quantidade_latas * 80
    return quantidade_latas, preco_total


print(calcula_quantidade_e_preco(108))


# ou
def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price


print(paint_costs(108))


# usando math.ceil
# import math


# def paint_costs(area):
#     can_price = 80
#     required_liters = area / 3
#     required_cans = math.ceil(required_liters / 18)
#     return required_cans, required_cans * can_price


# print(paint_costs(108))


# Exercício 6: Crie uma função que receba os três lado de um triângulo e
# informe qual o tipo de triângulo formado ou "não é triangulo", caso não seja
# possível formar um triângulo.

# 🦜 Dica:

# Copiar
#   Três lados formam um triângulo quando a soma de quaisquer dois lados for
#   maior que o terceiro;
#   Triângulo Equilátero: três lados iguais;
#   Triângulo Isósceles: quaisquer dois lados iguais;
#   Triângulo Escaleno: três lados diferentes.

def tipo_triangulo(lado1, lado2, lado3):
    nao_triangulo = (
            lado1 + lado2 < lado3 or
            lado2 + lado3 < lado1 or
            lado1 + lado3 < lado2
    )
    if nao_triangulo:
        return "Não é triângulo"
    elif lado1 == lado2 == lado3:
        return "Triângulo Equilátero"
    elif lado1 == lado2 or lado1 == lado3 or lado2 == lado3:
        return "Triângulo Isósceles"
    return "Triângulo Escaleno"


print(tipo_triangulo(1, 2, 3))


# ou
def type_of_triangle(side1, side2, side3):
    is_triangle = (
            side1 + side2 > side3 and
            side2 + side3 > side1 and
            side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"


print(type_of_triangle(1, 1, 1))
