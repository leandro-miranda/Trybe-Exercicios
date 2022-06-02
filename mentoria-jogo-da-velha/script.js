// Elementos HTML que serãoo utilizados durante o arquivo
const tabuleiro = document.querySelector("#tabuleiro");
const buttons = document.querySelectorAll(".buttonChange");
const msgDiv = document.querySelector(".mensagem");
const resetButton = document.querySelector("#reset");
const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     INDEX   0  1  2  3  4  5  6  7  8
//     LENGTH  1  2  3  4  5  6  7  8  9
// Função para recarregar a página
function reloadPage() {
  window.location.reload();
}
// Função para trocar a classe selected para o elemento que foi clicado
function changeSelect(event) {
  const selected = document.querySelector(".selected");
  selected.classList.remove("selected");
  event.target.classList.add("selected");
}
// Função que verifica quem ganhou ou se houve empate
function checkWinner() {
  if (board[0] === board[1] && board[1] === board[2]) {
    return "Quem ganhou foi o " + board[0];
  }
  if (board[3] === board[4] && board[4] === board[5]) {
    return "Quem ganhou foi o " + board[3];
  }
  if (board[6] === board[7] && board[7] === board[8]) {
    return "Quem ganhou foi o " + board[6];
  }
  if (board[0] === board[3] && board[3] === board[6]) {
    return "Quem ganhou foi o " + board[0];
  }
  if (board[1] === board[4] && board[4] === board[7]) {
    return "Quem ganhou foi o " + board[1];
  }
  if (board[2] === board[5] && board[5] === board[8]) {
    return "Quem ganhou foi o " + board[2];
  }
  if (board[0] === board[4] && board[4] === board[8]) {
    return "Quem ganhou foi o " + board[0];
  }
  if (board[2] === board[4] && board[4] === board[6]) {
    return "Quem ganhou foi o " + board[2];
  }
  // Condição para verificar se todos os elementos dentro do array BOARD viraram números
  let count = 0;
  for (let elements of board) {
    if (typeof elements !== "number") {
      count += 1;
    }
  }
  // Se sim é por que deu empate
  if (count === 9) {
    return "Empate";
  }
  // Se nenhuma das condições acima, então retorna nulo.
  return null;
}
// Função para disabilitar os botões que escolhem X ou O.
function disableButtons() {
  for (let btn of buttons) {
    btn.disabled = true;
  }
}
// Função que escreve nas DIVs o texto do elemento selecionado, seja X ou O.
function writeText(event) {
  const currentSelected = document.querySelector(".selected");
  event.target.innerText = currentSelected.innerText;
  board[event.target.id] = currentSelected.innerText;
  // Retorno da função checkWinner sendo armazenada na constante msg.
  const msg = checkWinner(); // Esse retorno pode ser nulo ou string
  // Verifica se não é nulo.
  if (msg !== null) {
    // Cria um span para armazenar a mensagem e chama a função para disabilitar os botões
    const winElement = document.createElement("span");
    winElement.innerText = msg;
    msgDiv.appendChild(winElement);
    disableButtons();
  }
}
// Função que cria Divs para o board.
function createBoard(size) {
  for (let index = 0; index < size; index += 1) {
    const newDiv = document.createElement("div");
    newDiv.id = index;
    newDiv.className = "div-board";
    // Adiciona evento em cada div criada
    newDiv.addEventListener("click", writeText);
    tabuleiro.appendChild(newDiv);
  }
}
// Função para ser chamada quando a página carregar.
window.onload = () => {
  // Cria o board com o tamanho específico
  createBoard(board.length);
  // Adiciona evento nos botões X e O;
  for (let btn of buttons) {
    btn.addEventListener("click", changeSelect);
  }
  // Adiciona evento no botão de jogar novamente
  resetButton.addEventListener("click", reloadPage);
};
