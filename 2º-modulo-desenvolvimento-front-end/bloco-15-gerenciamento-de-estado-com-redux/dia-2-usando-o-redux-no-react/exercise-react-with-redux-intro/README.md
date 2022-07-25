Esse é um projeto para o conteúdo do Bloco 15, sobre `Redux com react`.

### Antes de iniciar

Crie um fork desse projeto e para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

Após feito o fork, clone o repositório criado para o seu computador.

Rode o `npm install`.

Vá para a branch master do seu projeto e execute o comando:
- `git branch` ou `git branch -a` 

Verifique se as seguintes branchs apareceram:

  `exercise-one`
  
  `exercise-two`
  
  `exercise-three`
  
- Mude para a branch `exercise-one` com o comando `git checkout exercise-one`. É nessa branch que você realizará a solução para o exercício 1, e assim por diante.

Observe o que deve ser feito nas instruções para cada exercício.

Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a master, sinta-se a vontade!

**Atenção!** Quando for criar o PR você irá se deparar com essa tela:

![PR do exercício](images/example-pr.png)

É necessário realizar uma mudança. Clique no *base repository* como na imagem abaixo:

![Mudando a base do repositório](images/change-base.png)

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/TicTacToe`. Depois desse passo a página deve ficar assim:

![Após mudança](images/after-change.png)

Agora basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

Para cada PR realize esse processo.

---

#### Exercício 3

> Obs.: Enquanto os reducers não forem criados, a aplicação exibirá um erro no navegador.
- Nesse exercício utilizaremos os códigos dos exercícios 1 e 2. Aqui vamos juntar (combinar) os reducers dos dois primeiros exercícios, para que eles possam ser carregados juntos na mesma página da aplicação.

- O funcionamento dos dois componentes **DEVE** se manter o mesmo.

- Nesse exercício, toda a `store` já está pronta.

-Você precisará criar um arquivo para cada reducer dos exerícios anteriores(exercise-one e exercise-two), e mover o código de cada um deles para seus respectivos arquivos.

-Utilizar o arquivo `redux/reducers/index.js` para combinar os dois reducers. 

-Alterar os componentes `Cars.jsx` e `TrafficSignal.jsx` para receberem corretamente a informação de seus respectivos reducers.

- Utilize **Redux** para armazenar todo o estado da aplicação.