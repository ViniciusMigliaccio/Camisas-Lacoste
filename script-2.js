//Fiz essa outro arquivo script porque estava dando erro na mensagem do Form

document.addEventListener('DOMContentLoaded', function () {


  /*Responsivo*/

  const hamburger = document.querySelector(".hamburger");
  const header = document.querySelector("#header");

  hamburger.addEventListener("click", () => header.classList.toggle("ativo"));

  /*Fim*/

  /*Botao sobe*/

  window.addEventListener("scroll", function () {
    let sobe = document.querySelector('#sobe')
    sobe.classList.toggle('rolagem', window.scrollY > 0)
  })
});

/*Contato*/

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const clear = document.getElementById("clear");
const enviar = document.getElementById("submit");

function limparClasses(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("success");
  formControl.classList.remove("error");
}

form.addEventListener("submit", (e) => {
  if (!validar()) {
    e.preventDefault();
  }
});

function validar() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const telefoneValue = telefone.value;

  if (usernameValue === "") {
    setErrorFor(username, "Enter your name.");
    form.username.focus();
    return false;
  }
  if (usernameValue.length < 10) {
    setErrorFor(username, "Enter your full name.");
    form.username.focus();
    return false;
  }
  else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email is mandatory.");
    form.email.focus();
    return false;
  }
  else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Please enter a valid email.");
    form.email.focus();
    return false;
  }
  else {
    setSuccessFor(email);
  }

  if (telefoneValue === "") {
    setErrorFor(telefone, "Telephone number is mandatory.");
    form.telefone.focus();
    return false;
  }
  else {
    setSuccessFor(telefone);
  }


  enviar.addEventListener("click", () => {

    // após todo o codigo enviado, indo para 'index.html'                                           
    alert("Your data has been registered successfully!!                                           We'll be in touch soon :");
    window.location.href = 'index-2.html';
  });
}

clear.addEventListener("click", () => {
  limparClasses(username);
  limparClasses(email);
  limparClasses(telefone);
});


function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

const errorInputs = form.querySelectorAll(".form-control.error");
if (errorInputs.length > 0) {
  errorInputs[0].querySelector("input").focus();
}

//algoritimo para identificar Email

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}