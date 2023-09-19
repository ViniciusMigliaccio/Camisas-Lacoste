document.addEventListener('DOMContentLoaded', function () {

    /*Carrossel automatico*/
    const outra = document.getElementById("img");
    const img = document.querySelectorAll("#img img");

    let idx = 0;

    function carrossel() {
        idx++;

        if (idx > img.length - 1) {
            idx = 0;
        }

        outra.style.transform = `translateX(${-idx * 100}%)`;
    }

    setInterval(carrossel, 1800);


    /*Fim*/

    /*Responsivo*/

    const hamburger = document.querySelector(".hamburger");
    const header = document.querySelector("#header");

    hamburger.addEventListener("click", () => header.classList.toggle("ativo"));

    /*Fim*/

     /*Icone informação*/

    const infoButtons = document.querySelectorAll(".bi-info-circle");
    const slides = document.querySelectorAll(".slide");
    const closeButtons = document.querySelectorAll(".bi-x-lg");

    infoButtons.forEach((infoButton, index) => {
        // Adiciona um evento de clique para cada botão de informação
        infoButton.addEventListener("click", () => {
            slides[index].classList.toggle("ativar");
        });

        // Adiciona um evento de clique para cada botão de fechar
        closeButtons[index].addEventListener("click", () => {
            slides[index].classList.remove("ativar");
        });
    });


    /*Fim*/
    /*Botao sobe*/

    window.addEventListener("scroll", function () {
        let sobe = document.querySelector('#sobe')
        sobe.classList.toggle('rolagem', window.scrollY > 0)
    })
});

/*Contato*/

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
        setErrorFor(username, "Digite seu nome.");
        form.username.focus();
        return false;
    }
    if (usernameValue.length < 10) {
        setErrorFor(username, "Digite seu nome completo.");
        form.username.focus();
        return false;
    }
    else {
        setSuccessFor(username);
    }

    if (emailValue === "") {
        setErrorFor(email, "O email é obrigatório.");
        form.email.focus();
        return false;
    }
    else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um email válido.");
        form.email.focus();
        return false;
    }
    else {
        setSuccessFor(email);
    }

    if (telefoneValue === "") {
        setErrorFor(telefone, "O Número de telefone é obrigatório.");
        form.telefone.focus();
        return false;
    }
    else {
        setSuccessFor(telefone);
    }


    enviar.addEventListener("click", () => {

        // após todo o codigo enviado, indo para 'index.html'
        alert('Seus dados foram registrados com sucesso!!                                           Logo entraremos em contato :)');
        window.location.href = 'index.html';
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

