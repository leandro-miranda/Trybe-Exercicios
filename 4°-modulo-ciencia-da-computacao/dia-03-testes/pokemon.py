# Fakes: Objetos que possuem implementações funcionais,
# porém normalmente simplificadas;

# Mocks: São pré programados para verificar as chamadas das funções
# que receberem;

# Stubs: Fornecem respostas predefinidas;

# Spies: São como stubs, mas também armazenam informações de como
# foram chamados.
import json


def retrieve_pokemons_by_type(type, filepath):
    with open(filepath) as file:
        # lê o conteudo de reader e o transforma de json
        # para dicionário
        pokemons = json.load(file)["results"]
        # filtra somente os pokemons do tipo escolhido
        pokemons_by_type = [
            pokemon for pokemon in pokemons if type in pokemon["type"]
        ]
        return pokemons_by_type
