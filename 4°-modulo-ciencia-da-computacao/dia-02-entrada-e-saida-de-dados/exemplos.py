# import http  # importa o pacote http como um módulo

# from http import client  # importa o módulo client do pacote http

# from http.client import HTTP_PORT
# importa a constante HTTP_POST do módulo client do pacote http


# def sum(a, b):
#     return a + b


# def pot(a, b):
#     return a ** b


# print(sum(2, 2))
# print(pot(2, 3))

# input("Digite uma mensagem:")
# print("Mensagem digitada")

# import random

# # escolhe um número aleatório entre 1 e 10
# random_number = random.randint(1, 10)
# guess = ""

# while guess != random_number:  # enquanto não adivinhar o número
#     # pergunte a pessoa usuária um número
#     guess = int(input("Qual o seu palpite? "))

# print("O número sorteado era: ", guess)

# 💡 Fazemos uma conversão do palpite para um número inteiro, pois entrada de
# dados é sempre str.
# 💡 Para rodar o exemplo acima, não crie um arquivo chamado random para inserir
# o código, pois o módulo que estamos importando se chama random e isso pode
# causar um erro! Lembre-se que, para rodar o código, você deve executar o
# comando python3 nome_do_arquivo.py no terminal.


# Outra maneira de recebermos valores externos na execução de nossos programas
# é utilizando o módulo sys. Quando executamos um script e adicionamos
# parâmetros, os mesmos estarão disponíveis através de uma variável chamada
# sys.argv, que é preenchida sem que precisemos fazer nada. Na prática,
# podemos escrever o conteúdo abaixo em um arquivo e passar alguns parâmetros
# ao executá-lo.
import sys


if __name__ == "__main__":
    for argument in sys.argv:
        print("Received -> ", argument)


print("O resultado é", 42)  # saída: O resultado é 42
print("Os resultados são", 6, 23, 42)  # saída: Os resultados são 6 23 42

# O separador padrão dos argumentos é um espaço em branco,
# que pode ser alterado.
# saída: Maria João Miguel Ana
print("Maria", "João", "Miguel", "Ana")
# saída: Maria, João, Miguel, Ana
print("Maria", "João", "Miguel", "Ana", sep=", ")

# Além do separador, podemos também alterar o caractere de fim de linha que,
# por regra, é uma quebra de linha:
print("Em duas ")
print("linhas.")

# Alterando o padrão:
print("Na mesma", end=" ")
print("linha.")


# import sys


# err = "Arquivo não encontrado"
# print(f"Erro aconteceu: {err}", file=sys.stderr)

# 💡 Em Python, podemos fazer interpolação de variáveis e expressões utilizando
# f-string. Adicionamos um f antes das aspas e o valor de saída entre chaves.
# Essa dica é importante, pois é a maneira mais eficiente de formatar strings.
x = 5
y = 3
print(f"{x} / {y} = {x / y:.2f}")  # saída: 5 / 3 = 1.67
# {x} é substituído por 5
# {y} é substituído por 3
# {x / y:.2f} O que vem após os dois pontos são formatadores, como nesse
# exemplo, duas casas decimais (.2f).
print(f"{x:.^3}")  # saída: ".5."
# . é o caractere utilizado para preencher
# ^ indica que o valor será centralizado
# 3 são o número de caracteres exibidos


# O desempacotamento de valores é um recurso muito útil de Python quando
# queremos separar os valores recebidos em variáveis diferentes. Quando há uma
# atribuição múltipla e o valor da direita pode ser percorrido, o Python
# entende que deve atribuir cada um dos valores a uma variável da esquerda,
# seguindo a ordem. Vejamos no exemplo abaixo:

# 💡 Execute o código abaixo para que você veja os valores printados e entenda
# melhor o funcionamento.
a, b = "cd"
print(a)  # saída: c
print(b)  # saída: d
# Quando um * está presente no desempacotamento, os valores são desempacotados
# em formato de lista.
head, *tail = (1, 2, 3)
print(head)  # saída: 1
print(tail)  # saída: [2, 3]

# A função open é a responsável por abrir um arquivo, tornando possível sua
# manipulação. Seu único parâmetro obrigatório é o nome do arquivo. Por padrão,
# arquivos são abertos somente para leitura, mas podemos modificar isto
# passando o modo com que vamos abrir o arquivo. No exemplo abaixo, estamos
# utilizando mode="w", ou seja, estamos abrindo o arquivo para escrita:
# ao abrir um arquivo para escrita, um novo arquivo é criado mesmo que ele já
# exista, sobrescrevendo o antigo.
file = open("arquivo.txt", mode="w")
# Para escrevermos um conteúdo em um arquivo utilizamos a função write:
file.write('nome idade\n')
file.write('João 20\n')
file.write('Maria 25\n')
# 💡 Só é possível escrever em um arquivo após abri-lo em um modo que permita
# escrita.
# Não precisa da quebra de linha, pois esse é um comportamento padrão do print
print("Túlio 22", file=file)
# Para escrever múltiplas linhas podemos utilizar a função writelines. Repare
# que a função espera que cada linha tenha seu próprio caractere de
# separação (\n):
LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
file.writelines(LINES)
file.close()
# A leitura do conteúdo de um arquivo pode ser feita utilizando a função read.
# Para experimentar, vamos escrever em um arquivo e lê-lo logo em seguida!
# escrita
file = open("arquivo.txt", mode="w")
file.write("Trybe S2")
file.close()

# leitura
file = open("arquivo.txt", mode="r")
content = file.read()
print(content)
file.close()  # não podemos esquecer de fechar o arquivo


# Um arquivo é também um iterável, ou seja, pode ser percorrido em um laço de
# repetição. A cada iteração, uma nova linha é retornada. Vamos fazer igual ao
# exemplo anterior, porém dessa vez vamos escrever mais de uma linha!
# escrita
file = open("arquivo.txt", mode="w")
LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
file.writelines(LINES)
file.close()

# leitura
file = open("arquivo.txt", mode="r")
for line in file:
    # não esqueça que a quebra de linha também é um caractere da linha
    print(line)
file.close()  # não podemos esquecer de fechar o arquivo


# Além de arquivos textuais (como os que manipulamos até agora), também existem
# arquivos binários. Eles são arquivos que contêm uma série de bytes e a sua
# leitura pode variar de acordo com o arquivo. Nesse caso, devemos acrescentar
# um b ao parâmetro mode, indicando que será utilizado o modo binário.

# As operações são similares a de um arquivo textual. Porém tanto a escrita
# quanto a leitura devem ser feitas utilizando bytes.

# escrita
file = open("arquivo.dat", mode="wb")
# o prefixo b em uma string indica que seu valor está codificado em bytes
file.write(b"C\xc3\xa1ssio 30")
file.close()

# leitura
file = open("arquivo.dat", mode="rb")
content = file.read()
print(content)  # saída: b'C\xc3\xa1ssio 30'
file.close()  # não podemos esquecer de fechar o arquivo


# Erros de Sintaxe
# Erros de sintaxe ocorrem quando o código utiliza recursos inexistentes da
# linguagem que não consegue interpretá-los. É como executar
# print{"Olá, mundo!"} em vez de print("Olá, mundo!").

# Exceções
# Já as exceções ocorrem durante a execução e resultam em mensagem de erro.
# Veja exemplos de exceções:
# print(10 * (1 / 0))
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# ZeroDivisionError: division by zero
# print(4 + spam * 3)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# NameError: name 'spam' is not defined
# print('2' + 2)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# TypeError: can only concatenate str (not "int") to str

# Tratamento de exceções
# Para tratar exceções utilizamos o conjunto de instruções try, com as palavras
# reservadas try e except. O funcionamento dessa cláusula ocorre da seguinte
# forma:

# Se nenhuma exceção ocorrer, a cláusula except é ignorada e a execução da
# instrução try é finalizada.
# Se ocorrer uma exceção durante a execução da cláusula try, as instruções
# remanescentes na cláusula são ignoradas. Se o tipo da exceção ocorrida tiver
# sido previsto em algum except, então essa cláusula será executada.
# Se não existir nenhum tratador previsto para tal exceção, trata-se de uma
# exceção não tratada e a execução do programa termina com uma mensagem de
# erro. Vamos agora ver um exemplo de tratamento de exceções:
while True:
    try:
        x = int(input("Please enter a number: "))
        break
    except ValueError:
        print("Oops!  That was no valid number.  Try again...")


# Lidando com exceções enquanto manipulamos arquivos
# Vamos ver agora como podemos nos prevenir de possíveis erros que ocorrem
# quando manipulamos arquivos. Sempre devemos fechar um arquivo e podemos,
# em um bloco try, fazer isso utilizando a instrução finally ou else. O finally
# é uma outra cláusula do conjunto try, cuja finalidade é permitir a
# implementação de ações de limpeza, que sempre devem ser executadas
# independentemente da ocorrência de ações. Já o else ocorre sempre que todo o
# try for bem sucedido.
try:
    arquivo = open("arquivo.txt", "r")
except OSError:
    # será executado caso haja uma exceção
    print("arquivo inexistente")
else:
    # será executado se tudo ocorrer bem no try
    print("arquivo manipulado e fechado com sucesso")
    arquivo.close()
finally:
    # será sempre executado, independentemente de erro
    print("Tentativa de abrir arquivo")
# Como estamos abrindo o arquivo em modo de leitura, uma exceção será levantada
# caso ele não exista, executando as cláusulas except e finally. Entretanto, se
# alterarmos o modo para escrita, o arquivo será criado mesmo se inexistente,
# executando as cláusulas else e finally.


# O with é a palavra reservada para gerenciamento de contexto.
# Este gerenciamento (with) é utilizado para encapsular a utilização de um
# recurso, garantindo que certas ações sejam tomadas independentemente se
# ocorreu ou não um erro naquele contexto.

# A função open retorna um objeto que se comporta como um gerenciador de
# contexto de arquivo que será responsável por abrir e fechar o mesmo.
# Isto significa que o arquivo possui mecanismos especiais que, quando
# invocados utilizando with, alocam um determinado recurso — um arquivo — e o
# liberam quando o bloco for finalizado.
# Criamos um contexto, limitando o escopo onde o arquivo está aberto.
# O uso do "as" aqui é somente para atribuir o valor utilizado no contexto à
# variável file
with open("arquivo.txt", "w") as file:
    file.write("Michelle 27\n")
# como estamos fora do contexto, o arquivo foi fechado
print(file.closed)
# 💡 Já vimos a utilização de gerenciadores de contexto em testes. Lá,
# capturamos exceções que ocorrem e verificamos se naquele contexto a exceção
# lançada era a esperada. Não há um recurso a ser liberado, mas estamos
# garantindo que uma asserção será feita naquele contexto.
