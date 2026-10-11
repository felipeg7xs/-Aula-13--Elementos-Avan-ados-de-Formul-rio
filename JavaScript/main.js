/* Descricao: Aula 13- Elementos Avançados de Formulário
//nome_arquivo: main.js
//nome_exercicio: Aula 13- Elementos Avançados de Formulário
//nome_aluno: Felipe Gabriel de Oliveira
//email_aluno:felipe.oliveira139@aluno.cps.sp.gov.br
//turma: do primeiro semestre Código da Turma: WEBI-ISWO28-A 
*/
const formLogin = document.getElementById("formLogin");
const formPerfil = document.getElementById("formPerfil");
const formCadastro = document.getElementById("formCadastro");

const mostrarSenha = document.getElementById("mostrarSenha");
const senhaLogin = document.getElementById("senhaLogin");

// Mostrar ou esconder a senha
if (mostrarSenha && senhaLogin) {
    mostrarSenha.addEventListener("change", function () {
        senhaLogin.type = mostrarSenha.checked ? "text" : "password";
    });
}

// Validar o login
if (formLogin) {
    formLogin.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!formLogin.checkValidity()) {
            formLogin.reportValidity();
            return;
        }

        alert("Login validado! Esta é uma demonstração.");
    });
}

// Recuperar senha (demonstração)
const recuperarSenha = document.getElementById("recuperarSenha");

if (recuperarSenha) {
    recuperarSenha.addEventListener("click", function (event) {
        event.preventDefault();

        const email = prompt("Digite seu e-mail:");

        if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
            alert("Solicitação registrada nesta demonstração.");
        } else if (email !== null) {
            alert("Digite um e-mail válido.");
        }
    });
}

// Validar o perfil
if (formPerfil) {
    formPerfil.addEventListener("submit", function (event) {
        event.preventDefault();

        const interesses = document.querySelectorAll(
            'input[name="interesses"]:checked'
        );
        const mensagem = document.getElementById("mensagemPerfil");

        if (interesses.length === 0) {
            mensagem.textContent = "Selecione pelo menos uma área de interesse.";
            return;
        }

        mensagem.textContent = "Perfil validado com sucesso!";
    });

    formPerfil.addEventListener("reset", function () {
        document.getElementById("mensagemPerfil").textContent = "";
    });
}

// Validar o cadastro
if (formCadastro) {
    formCadastro.addEventListener("submit", function (event) {
        event.preventDefault();

        const senha = document.getElementById("senhaCadastro").value;
        const confirmar = document.getElementById("confirmarSenha").value;
        const mensagem = document.getElementById("mensagemCadastro");

        if (senha !== confirmar) {
            mensagem.textContent = "As senhas não são iguais.";
            return;
        }

        mensagem.textContent = "Cadastro validado com sucesso!";
    });
}
