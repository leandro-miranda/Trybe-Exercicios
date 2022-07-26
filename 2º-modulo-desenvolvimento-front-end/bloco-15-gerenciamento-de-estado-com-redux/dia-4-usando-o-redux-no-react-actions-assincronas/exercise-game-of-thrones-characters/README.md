Esse é um exercício para o conteúdo sobre `React com Redux`.

### COMEÇANDO OS EXERCÍCIOS

#### Exercício 1

Vamos fazer uma pequena aplicação que nos permitirá buscar informações sobre os personagens da famosa série de livros "As Crônicas de Gelo e Fogo", que gerou a famosa série _Game of Thrones_.

Neste repositório você encontrará alguns componentes React prontos. Além do próprio `App`, você terá o componente `SearchForm` - que se trata de um componente de classe que armazena o valor de `inputText` na medida que se digita algo no campo de busca e, quando se clica no botão da página, leva o texto digitado como valor de `characterSearched`.

Já o componente `characterInfo` exibe na tela informações obtidas através da API (que já está disponível para uso na pasta `services`) - tais como o nome completo, os apelidos, o gênero e os livros em que o personagem aparece. Se ficou sem entender alguma parte, estude a aplicação e coloque um `console.log()` na propriedade que estiver com dúvidas.

Então, a API está pronta, os componentes estão prontos, mas precisamos obter as informações da API e passar suas informações para a tela. Para tanto:

1- Execute o comando `npm install` e instale os pacotes `redux`, `react-redux` e `redux-thunk`. Crie o `thunk` que fará a requisição para a API e as `actions` referentes ao retorno com sucesso ou falha na dita requisição (não se esqueça de importar a função `charAPI.js` no seu arquivo `actions.js`).

2- Crie o `Reducer` que tratará as `actions` criadas no passo 1 e insira-o no `combineReducers`. ***Importante:*** a API retorna uma array com um único objeto, logo você precisa acessar a posição correta do array para, em seguida, se utilizar do objeto.

3- Conecte a `action` a ser despachada no seu componente `SearchForm` e os `states` oriundos do reducer no componente characterInfo, bem como prepare o componente para exibir uma mensagem em caso de erro da API.

4- Utilize a `Prop` importadas do seu `reducer` para renderizar o as informações na tela. Ao final, sua aplicação ficará mais ou menos assim:

![Aplicação pronta](images/prototype.gif)

P.S.: a nossa aplicação somente consegue fazer buscas pelo nome completo do personagem - ou seja, procurar somente por _Tyrion_ não nos dará nenhum retorno, já _Tyrion Lannister_ sim.
