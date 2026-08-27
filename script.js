// Contadores de reações
const botoesInteracao = document.querySelectorAll("article button");

botoesInteracao.forEach(function (botao) {
    botao.addEventListener("click", function () {
        let texto = botao.querySelector("span");
        if (texto) {
            texto.textContent++;
        }
    });
});

// Botão de Modo Escuro
const btnTema = document.querySelector(".btn-tema-escuro");

if (btnTema) {
    btnTema.addEventListener("click", function () {
        document.body.classList.toggle("tema-escuro");

        if (document.body.classList.contains("tema-escuro")) {
            btnTema.textContent = "☀️";
        } else {
            btnTema.textContent = "🌗";
        }
    });
} else {
    console.error("Botão .btn-tema-escuro não foi encontrado no HTML.");
}