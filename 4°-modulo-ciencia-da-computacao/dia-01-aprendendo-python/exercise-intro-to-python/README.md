# Boas vindas aos exercícios de introdução ao Python 🚀

# Entregáveis

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />
  
  Nesses exercícios você implementará funções em Python para resolver um conjunto de problemas básicos e irá se familiarizar com a nossa ferramenta de testes automatizados, o Pytest!

</details>

<details>
  <summary><strong>🚵 Habilidades a serem trabalhadas:</strong></summary><br />
  
  <ul>
    <li>Utilizar o terminal interativo do Python.</li>
    <li>Utilizar estruturas condicionais e de repetição.</li>
    <li>Utilizar funções built-in do Python.</li>
    <li>Escrever funções.</li>
  </ul>

</details>

# Orientações
<details>
  <summary><strong>⚠ Antes de começar a desenvolver</strong></summary><br />

  1. Clone o repositório

  - Entre na pasta do repositório que você acabou de clonar:
    - `cd exercise-intro-to-python`

  2. Crie o ambiente virtual para o exercício

  - `python3 -m venv .venv && source .venv/bin/activate`
  
  3. Instale as dependências

  - `python3 -m pip install -r dev-requirements.txt`

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

  Para garantir a qualidade do código, vamos utilizar nesses exercícios o linter `Flake8`.
  Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
  e de fácil manutenção! Para rodá-lo localmente no projeto, execute o comandos abaixo:

  ```bash
  python3 -m flake8
  ```

<details>
  <summary><strong>🏕️ Ambiente Virtual</strong></summary><br />
  O Python oferece um recurso chamado de ambiente virtual, onde permite sua máquina rodar sem conflitos, diferentes tipos de projetos com diferentes versões de bibliotecas.

  1. **criar o ambiente virtual**

  ```bash
  $ python3 -m venv .venv
  ```

  2. **ativar o ambiente virtual**

  ```bash
  $ source .venv/bin/activate
  ```

  3. **instalar as dependências no ambiente virtual**

  ```bash
  $ python3 -m pip install -r dev-requirements.txt
  ```

  Com o seu ambiente virtual ativo, as dependências serão instaladas neste ambiente.
  Quando precisar desativar o ambiente virtual, execute o comando "deactivate". Lembre-se de ativar novamente quando voltar a trabalhar no projeto.

  O arquivo `dev-requirements.txt` contém todas as dependências que serão utilizadas no projeto, ele está agindo como se fosse um `package.json` de um projeto `Node.js`.
</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

  Para executar os testes certifique-se de que você está com o ambiente virtual ativado.

  <strong>Executar os testes</strong>

  ```bash
  $ python3 -m pytest
  ```

  O arquivo `pyproject.toml` já configura corretamente o pytest. Entretanto, caso você tenha problemas com isso e queira explicitamente uma saída completa, o comando é:

  ```bash
  python3 -m pytest -s -vv
  ```

  Caso precise executar apenas um arquivo de testes basta executar o comando:

  ```bash
  python3 -m pytest tests/nomedoarquivo.py
  ```

  Caso precise executar apenas uma função de testes basta executar o comando:

  ```bash
  python3 -m pytest -k nome_da_func_de_tests
  ```

  Se desejar que os testes parem de ser executados quando acontecer o primeiro erro, use o parâmetro `-x`

  ```bash
  python3 -m pytest -x tests/test_jobs.py
  ```
  
  Para executar um teste específico de um arquivo, basta executar o comando:

  ```bash
  python3 -m pytest tests/nomedoarquivo.py::test_nome_do_teste
  ```

  Se quiser saber mais sobre a instalação de dependências com `pip`, veja esse [artigo](https://medium.com/python-pandemonium/better-python-dependency-and-package-management-b5d8ea29dff1).
</details>

<details>
  # Exercícios

  ## 1 - Crie uma função que receba dois números e retorne o maior deles
  > **Implemente em:** `src/biggest_number.py`

  ## 2 - Calcule a média aritmética dos valores contidos em uma lista
  > **Implemente em:** `src/average.py`

  ## 3 - Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres.
  > **Implemente em:** `src/biggest_name.py`
</details>