window.onload = function () {
  const buttonBtn = document.querySelector("#button-btn");
  buttonBtn.addEventListener("click", sendButton);

  const clearButton = document.querySelector("#clear-button");
  clearButton.addEventListener("click", clearFields);

  const click2 = document.querySelector("#click-2");
  click2.addEventListener("change", enableButtonSend);
  // em checkBoxes não usamos 'click' e sim 'change'
};

function sendButton(event) {
  event.preventDefault();
  const validation = textInputValidation();
  if (validation === false) {
    alert("Dados inválidos");
  } else {
    alert(
      "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip."
    );
  }
}

// criando funções responsáveis por limpar as informações
function clearFields() {
  const eraseElements = document.querySelectorAll("input");
  const textArea = document.querySelector("textarea");
  for (let i = 0; i < eraseElements.length; i += 1) {
    const userInput = eraseElements[i];
    userInput.value = "";
    userInput.checked = false;
  }
  textArea.value = "";
}

// função responsável por habilitar o botão enviar
function enableButtonSend() {
  const enableButton = document.querySelector("#button-btn");
  const click2 = document.querySelector("#click-2");
  enableButton.disabled = !click2.checked;
  /* Esse operador é chamado de "bang", e ele representa uma negação, ou seja, o contrário do retorno de alguma coisa. Se algo for verdadeiro ele retornará falso e vice-versa.
  No nosso código estamos dizendo que a propriedade disabled do submitBtn é igual a negação da propriedade checked da checkbox agreement . Sendo assim, se a checkbox estiver "checkada" nosso botão não estará desabilitado (estará habilitado) */
}

// Faça a validação dos campos com limite de caracteres, caso não estejam como esperado ao clicar no botão enviar, um alerta deve ser mostrado. Criando uma função que irá validar os dados
function textInputValidation() {
  const email = document.querySelector("#e-mail").value.length;
  const emailInvalid = email < 10 || email > 50;
  const name = document.querySelector("#full-name").value.length;
  const nameInvalid = name < 10 || name > 50;
  const text = document.querySelector("#text-area-1").value.length;
  const textInvalid = text > 500;

  if (emailInvalid || nameInvalid || textInvalid) {
    return false;
  } else {
    return true;
  }
}
