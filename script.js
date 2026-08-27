// Função do Modo Escuro disparada ao clicar no botão
function alternarTema() {
    document.body.classList.toggle("tema-escuro");

    const btnTema = document.querySelector(".btn-tema-escuro");
    if (document.body.classList.contains("tema-escuro")) {
        btnTema.textContent = "☀️";
    } else {
        btnTema.textContent = "🌗";
    }
}

// Contador de reações dos artigos
document.querySelectorAll("article button").forEach(function (botao) {
    botao.addEventListener("click", function () {
        let texto = botao.querySelector("span");
        if (texto) {
            texto.textContent = Number(texto.textContent) + 1;
        }
    });
});