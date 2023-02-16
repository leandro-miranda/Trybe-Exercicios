# Exercício 1:

# Faça um programa que receba um nome e imprima o mesmo na vertical em escada
# invertida. Exemplo de Entrada:

# PEDRO
# Saída:

# PEDRO
# PEDR
# PED
# PE
# P
def name_vertical(name):
    for i in range(len(name), 0, -1):
        print(name[:i])


name_vertical('PEDRO')
# Range() é uma função interna do Python que cria uma sequência imutável de
# números inteiros. Ela é usada comumente em loops for para iterar sobre um
#     intervalo específico de números. O intervalo começa com 0 por padrão e é
# incrementado por 1, a menos que seja especificado de outra forma.
# O len() é uma função embutida do Python que retorna o número de elementos de
# um objeto. Ele pode ser usado para contar o número de caracteres em uma
# string, o número de itens em uma lista ou o número de elementos
# em um dicionário.
# OU
def name_vertical(name):
    for letras in range(len(name)):
        for index in range(len(name) - letras):
            print(name[index], end='')
        print()


if __name__ == '__main__':
    name = input('Digite um nome: ')
    name_vertical(name)


# Exercício 2:

# Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha
# que adivinhar uma palavra que será mostrada com as letras embaralhadas.
# O programa terá uma lista de palavras e escolherá uma aleatoriamente.
# O jogador terá três tentativas para adivinhar a palavra. Ao final, a palavra
# deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.

# 🦜 Para embaralhar uma palavra faça:
# scrambled_word = "".join(random.sample(word, len(word)))

# 🦜 O sorteio de uma palavra aleatória pode ser feito utilizando o método
# choice: random.choice(["word1", "word2", "word3"]) -> "word2".
import random

WORDS = ['python', 'java', 'kotlin', 'javascript']
MAX_ATTEMPTS = 3


def draw_secret_word(words):
    secret_word = random.choice(words)
    scrambled_word = "".join(random.sample(secret_word, len(secret_word)))
    return secret_word, scrambled_word


def collect_guesses():
    guesses = []
    for attempt in range(MAX_ATTEMPTS):
        guess = input('Guess the word: ')
        guesses.append(guess)
    return guesses


def check_game_resul(secret_word, guesses):
    if secret_word in guesses:
        print(f'You win: {secret_word}')
    else:
        print(f'You lose: {secret_word}')


if __name__ == '__main__':
    secret_word, scrambled_word = draw_secret_word(WORDS)
    print(f'Scrambled word is: {scrambled_word}')
    guesses = collect_guesses()
    check_game_resul(secret_word, guesses)


# Exercício 3:
# Modifique o exercício anterior para que as palavras sejam lidas de um arquivo
# Considere que o arquivo terá cada palavra em uma linha.
import random


MAX_ATTEMPTS = 3


def retrieve_words(file):
    return [word.strip() for word in file]


def draw_secret_word(words):
    secret_word = random.choice(words)
    scrambled_word = "".join(random.sample(secret_word, len(secret_word)))
    return secret_word, scrambled_word


def collect_guesses():
    guesses = []
    for attempt in range(MAX_ATTEMPTS):
        guess = input("Guess the word: ")
        guesses.append(guess)
    return guesses


def check_game_result(secret_word, guesses):
    if secret_word in guesses:
        print(f"You win: the secret word is {secret_word}")
    else:
        print(f"You lose: the secret word is {secret_word}")


if __name__ == "__main__":
    with open("words.txt") as file:
        words = retrieve_words(file)
    secret_word, scrambled_word = draw_secret_word(words)
    print(f"Scrambled word is {scrambled_word}")
    guesses = collect_guesses()
    check_game_result(secret_word, guesses)


# 🚀 Exercício 4:
# Dado o seguinte arquivo no formato JSON, leia seu conteúdo e calcule a
# porcentagem de livros em cada categoria em relação ao número total de livros.
# O resultado deve ser escrito em um arquivo no formato CSV como o
# exemplo abaixo.
# Saída:

# Copiar
# categoria,porcentagem
# Python,0.23201856148491878
# Java,0.23201856148491878
# PHP,0.23201856148491878
import json
import csv


def retrieve_books(file):
    return json.load(file)



def count_books_by_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def calculate_percentage_by_category(book_count_by_category, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_by_category.items()
    ]


def write_csv_report(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


if __name__ == "__main__":
    # retrieve books
    with open("books.json") as file:
        books = retrieve_books(file)

    # count by category
    book_count_by_category = count_books_by_categories(books)

    # calculate percentage
    number_of_books = len(books)
    books_percentage_rows = calculate_percentage_by_category(
        book_count_by_category, number_of_books
    )

    # write csv
    header = ["categoria", "percentagem"]
    with open("report.csv", "w") as file:
        write_csv_report(file, header, books_percentage_rows)


# Exercícios - bônus
# Exercício 5: Utilizando o arquivo pokemons.json, vamos escrever um programa
# que sorteie um pokemon aleatoriamente. O programa deve perguntar à pessoa
# usuária “Quem é esse pokemon?” até que ela o acerte. A cada erro, apresente
# um número de letras do nome daquele pokemon igual ao número de erros.

# Exemplo: O pokemon sorteado pelo programa é butterfree; a pessoa usuária
# chuta charizard; o programa deve exibir b. Em seguida, a pessoa chuta
# blastoise; o programa deve exibir bu; e assim por diante até a pessoa
# acertar.

# 🦜 Você pode utilizar o método choice do modulo random para sortear
# aleatoriamente um pokemon.
# Ex: random.choice(pokemon) -> {"name": "Pikachu" }.

import json
import random


def shot(pokemon_name):
    wrong_shot = True
    num_of_shots = 0
    while (wrong_shot):
        num_of_shots += 1
        shot = input("Quem é esse pokemon? ")
        if (shot == pokemon_name):
            print("Você acertou! Parabéns!")
            break
        elif num_of_shots == len(pokemon_name):
            print("Você errou!")
            break
        else:
            print("Dica: ", end="")
            for i in range(0, num_of_shots):
                print(pokemon_name[i], end="")
            print("")


if __name__ == "__main__":
    with open("pokemons.json") as file:
        pokemons = json.load(file)["results"]
        pokemon = random.choice(pokemons)
        pokemon_name = pokemon["name"]

    shot(pokemon_name)
