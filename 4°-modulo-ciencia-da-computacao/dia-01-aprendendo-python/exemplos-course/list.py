# elementos são definidos separados por vírgula, envolvidos por colchetes
fruits = ["laranja", "maçã", "uva", "abacaxi"]

fruits[0]  # o acesso é feito por índices iniciados em 0

fruits[-1]  # o acesso também pode ser negativo - pega o último elemento

fruits.append("banana")  # adicionando uma nova fruta

fruits.remove("abacaxi")  # removendo uma fruta

# acrescenta uma lista de frutas a lista original
fruits.extend(["pera", "melão", "kiwi"])

# retorna o índice onde a fruta está localizada, neste caso, 1
fruits.index("maçã")

fruits.sort()  # ordena a lista de frutas

fruits[3] = "morango"  # acessa e altera o primeiro elemento da lista

# Anota aí ✏️: uma lista é uma sequência mutável e ordenada de elementos.
# Ela pode armazenar elementos heterogêneos, ter seu tamanho variável e crescer
# à medida que itens são adicionados.
