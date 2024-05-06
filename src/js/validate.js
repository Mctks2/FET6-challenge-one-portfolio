// VARIAVEIS

const nameInput = document.querySelector("nome").value;
const nameErro = document.getElementById("nomeErro");

const email = document.getElementById("email").value;
const emailErro = document.getElementById("emailErro");
const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;

const subject = document.getElementById("subject").value;
const subjectErro = document.getElementById("subjectErro");

const message = document.getElementById("message").value;
const messageErro = document.getElementById("messageErro");

const formContact = document.getElementById('formContact');

const sendBtn = document.getElementById('sendBtn');
// EVENTOS

formContact.addEventListener('input', function() {
  validateForm();
});

sendBtn.addEventListener("click", function () {
  if (document.getElementById("formContact").checkValidity()) {
    alert("Formulário enviado com sucesso!");
    resetForm();
    document.getElementById("sendBtn").disabled = true;
  }
});

// FUNÇOES
function validateForm() {
  // Obtém o resultado de cada validação e armazena em isValid
  let isValid = validateName() && validateEmail() && validateSubject() && validateMessage();

  // Retorna isValid, que será true se todas as validações forem verdadeiras e false se alguma for falsa
  return isValid;
}


function validateName() {
  if (!nameInput) {
    nameErro.textContent = "O campo nome é obrigatório.";
    return false;
  } else if (nameInput.length > 50) {
    nameErro.textContent = "O nome não pode exceder 50 caracteres.";
    return false;
  } else {
    nameErro.textContent = "";
    return true;
  }
}

function validateEmail() {
  if (!email) {
    emailErro.textContent = "O campo e-mail é obrigatório.";
    return false;
  } else if (!emailPattern.test(email)) {
    emailErro.textContent = "O formato do e-mail é inválido.";
    return false;
  } else {
    emailErro.textContent = "";
    return true;
  }
}

function validateSubject() {
  if (!subject) {
    subjectErro.textContent = "O campo assunto é obrigatório.";
    return false;
  } else if (subject.length > 50) {
    subjectErro.textContent = "O assunto não pode exceder 50 caracteres.";
    return false;
  } else {
    subjectErro.textContent = "";
    return true;
  }
}

function validateMessage() {
  if (!message) {
    messageErro.textContent = "O campo mensagem é obrigatório.";
    return false;
  } else if (message.length > 300) {
    messageErro.textContent = "A mensagem não pode exceder 300 caracteres.";
    return false;
  } else {
    messageErro.textContent = "";
    return true;
  }
}

function resetForm() {
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("assunto").value = "";
  document.getElementById("mensagem").value = "";
  document.getElementById("nomeErro").textContent = "";
  document.getElementById("emailErro").textContent = "";
  document.getElementById("assuntoErro").textContent = "";
  document.getElementById("mensagemErro").textContent = "";
}
