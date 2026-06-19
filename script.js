let contador = 0;

// BOTÃO SURPRESA
document.addEventListener("DOMContentLoaded", () => {

    const btnSurpresa = document.getElementById("btnSurpresa");
    const btnContador = document.getElementById("btnContador");

    if (btnSurpresa) {
        btnSurpresa.addEventListener("click", () => {
            alert("🌸 Você está ajudando a construir um futuro mais sustentável! 💗");
        });
    }

    // CONTADOR
    if (btnContador) {
        btnContador.addEventListener("click", () => {
            contador++;
            document.getElementById("numero").innerText = contador;
        });
    }

    // FAQ TOGGLE
    const perguntas = document.querySelectorAll(".faq");

    perguntas.forEach(item => {
        item.addEventListener("click", () => {
            const id = item.getAttribute("data-id");
            const resposta = document.getElementById(id);

            if (resposta.style.display === "block") {
                resposta.style.display = "none";
            } else {
                resposta.style.display = "block";
            }
        });
    });

});
