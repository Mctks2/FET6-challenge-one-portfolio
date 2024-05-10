// Seleciona os elementos do formulário
const formContact = document.querySelector('.formcontato');
const nameInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#assunto");
const messageTextArea = document.querySelector("#mensagem");
const sendBtn = document.querySelector("#botao");

// Validações de nome, email, assunto e mensagem
function validateName() {
  const nameValue = nameInput.value.trim();
  const errorNome = document.getElementById('error-nome');

  if (!nameValue) {
    errorNome.textContent = "O campo nome é obrigatório";
    return false;
  } else if (nameValue.length > 50) {
    errorNome.textContent = "O nome não pode exceder 50 caracteres";
    return false;
  } else {
    errorNome.textContent = "";
    return true;
  }
}

function validateEmail() {
  const emailValue = emailInput.value.trim();
  const errorEmail = document.getElementById('error-email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === '') {
    errorEmail.textContent = 'O campo e-mail não pode ficar em branco.';
    return false;
  } else if (!emailRegex.test(emailValue)) {
    errorEmail.textContent = 'Por favor, insira um e-mail válido no formato texto@exemplo.com.';
    return false;
  } else {
    errorEmail.textContent = '';
    return true;
  }
}

function validateSubject() {
  const subjectValue = subjectInput.value.trim();
  const errorAssunto = document.getElementById('error-assunto');

  if (subjectValue === '') {
    errorAssunto.textContent = 'O campo Assunto não pode ficar em branco.';
    return false;
  } else if (subjectValue.length > 50) {
    errorAssunto.textContent = 'O campo Assunto não pode ter mais de 50 caracteres.';
    return false;
  } else {
    errorAssunto.textContent = '';
    return true;
  }
}

function validateMessage() {
  const messageValue = messageTextArea.value.trim();
  const errorMessage = document.getElementById('error-mensagem');

  if (messageValue === '') {
    errorMessage.textContent = 'O campo Mensagem não pode ficar em branco.';
    return false;
  } else if (messageValue.length > 300) {
    errorMessage.textContent = 'O campo Mensagem não pode ter mais de 300 caracteres.';
    return false;
  } else {
    errorMessage.textContent = '';
    return true;
  }
}

// Evento de submit do formulário
formContact.addEventListener('submit', function(event) {
  // Validar todos os campos ao enviar o formulário
  const isValidName = validateName();
  const isValidEmail = validateEmail();
  const isValidSubject = validateSubject();
  const isValidMessage = validateMessage();

  if (!isValidName || !isValidEmail || !isValidSubject || !isValidMessage) {
    event.preventDefault(); // Evita o envio do formulário se houver erros
  }
});