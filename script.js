// 1. Contador de reações nos artigos
const botoesInteracao = document.querySelectorAll("article button");

botoesInteracao.forEach(function (botao) {
    botao.addEventListener("click", function () {
        let texto = botao.querySelector("span");
        if (texto) {
            texto.textContent++;
        }
    });
});

// 2. Alternar para o Modo Escuro
const btnTema = document.querySelector(".btn-tema-escuro");

btnTema.addEventListener("click", function () {
    // Adiciona ou remove a classe 'tema-escuro' da tag <body>
    document.body.classList.toggle("tema-escuro");

    // Altera o ícone do botão dependendo do tema ativo
    if (document.body.classList.contains("tema-escuro")) {
        btnTema.textContent = "☀️";
    } else {
        btnTema.textContent = "🌗";
    }
});