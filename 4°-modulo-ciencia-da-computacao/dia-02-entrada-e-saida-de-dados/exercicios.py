# Exercício 1:
# Faça um programa que solicite o nome de uma pessoa usuária e imprima-o na
# vertical. Exemplo:
# F
# U
# L
# A
# N
# O
def print_vertical(name):
    for letter in name:
        print(letter)


# Essa função é usada para verificar se o código está sendo executado
# diretamente ou se está sendo importado a partir de outro módulo.
# Se o código estiver sendo executado diretamente,
# o valor da variável __name__ será __main__. Se o código for importado de
# outro módulo, o valor da variável __name__ será o nome do módulo.
if __name__ == "__main__":
    name = input("Digite seu nome: ")
    print_vertical(name)

# OU

NAME = input("Digite seu nome: ")

for letter in NAME:
    print(letter)


# Exercício 2:
# Escreva um programa que receba vários números naturais e calcule a soma
# desses valores. Caso algum valor da entrada seja inválido
# (por exemplo uma letra), uma mensagem deve ser exibida na saída de erros no
# seguinte formato:
# “Erro ao somar valores, {valor} é um valor inválido”. Ao final, você deve
# imprimir a soma dos valores válidos.

# 🦜 Receba os valores em um mesmo input, solicitando à pessoa usuária que
# separe-os com um espaço. Receba os valores no formato str e utilize o método
# split para pegar cada valor separado. O método isdigit, embutido no tipo str,
# pode ser utilizado para verificar se a string corresponde a um
# número natural.
nums = input("Insira valores aqui, separados por espaço: ").split()
sum = 0

for num in nums:
    if num.isdigit():
        sum += int(num)
    else:
        print(f"Erro ao somar valores, {num} é um valor inválido")

print(f"A soma dos valores válidos é {sum}")

# OU

nums = input("Insira valores aqui, separados por espaço: ")

numsArr = nums.split(" ")

sum = 0
for num in numsArr:
    if not num.isdigit():
        print(f"Erro ao somar valores, {num} não é um dígito.")
    else:
        sum += int(num)

print(f"A soma dos valores válidos é: {sum}")


# Exercício 3:
# Dado um arquivo contendo estudantes e suas respectivas notas, escreva um
# programa que:

# lê todas essas informações;
# aplique um filtro, mantendo somente as pessoas que estão reprovadas;
# escreva seus nomes em outro arquivo.
# Considere que a nota miníma para aprovação é 6.

# Arquivo:

# Marcos 10
# Felipe 4
# José 6
# Ana 10
# Maria 9
# Miguel 5

# Exemplo saída:

# Felipe
# Miguel

# 🦜 A função split pode ser utilizada para dividir o nome em uma linha.
# Ex: line.split() -> ["Marcos", "10"].
# recuStudents = [
#     'Marcos', '10',
#     'Felipe', '4',
#     'José', '6',
#     'Ana', '10',
#     'Maria', '9',
#     'Miguel', '5',
# ]

recuStudents = []
with open("students.txt", mode="r") as gradesFile:
    for line in gradesFile:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            recuStudents.append(student_grade[0] + "\n")


with open("recuStudents.txt", mode="w") as recuStudentsFile:
    print(recuStudents)
    recuStudentsFile.writelines(recuStudents)
