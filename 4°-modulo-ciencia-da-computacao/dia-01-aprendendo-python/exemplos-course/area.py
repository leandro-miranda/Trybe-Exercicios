# Observe que esse código segue algumas boas práticas para legibilidade,
# tais como:

# Entre cada função temos um espaço de 2 linhas;
# As funções são declaradas com nomes em letras minúsculas;
# A constante PI é definida em letras maiúsculas.
PI = 3.14  # PI é uma "constante" em nosso módulo


def square(side):
    '''Calculate area of square.'''
    return side * side


def rectangle(length, width):
    '''Calculate area of rectangle.'''
    return length * width


def circle(radius):
    '''Calculate area of circle.'''
    return PI * radius * radius


if __name__ == "__main__":
    print("Área do quadrado:", square(10))
    print("Área do retângulo:", rectangle(2, 2))
    print("Área do círculo:", circle(3))

# Os nossos valores de teste estão sendo exibidos quando importamos o módulo.
# Mas não queremos que isso aconteça.

# Para corrigir, podemos acrescentar uma condicional ao módulo para somente
# exibir esses valores de teste quando o módulo for executado como script.

# A variável __name__ é utilizada pelo interpretador Python para identificar o
# arquivo que esta sendo executado e seu valor será "__main__" quando invocamos
# um módulo como script.
