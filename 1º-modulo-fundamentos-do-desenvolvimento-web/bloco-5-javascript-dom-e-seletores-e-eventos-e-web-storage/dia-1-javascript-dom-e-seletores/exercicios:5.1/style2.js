/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

function changeText() {
  let paragraph = document.getElementsByTagName("p")[1];
  paragraph.innerHTML = "Estar muito feliz trabalhando como DEV!";
}
changeText();

function colorSite() {
  let yellon = document.getElementsByClassName("main-content")[0];
  yellon.style.background = "rgb(76,164,109)";
}
colorSite();

function colorCenter() {
  let red = document.getElementsByClassName("center-content")[0];
  red.style.background = "white";
}
colorCenter();

function textCentral() {
  let titulo = document.getElementsByTagName("h1")[0];
  titulo.innerText = "Exercício 5.1 - JavaScript";
}
textCentral();

function textBig() {
  let paragraph = document.getElementsByTagName("p")[0];
  paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
}
textBig();

function totalTagsP() {
  let paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i += 1) {
    console.log(paragraphs[i].innerHTML);
  }
}
totalTagsP();
