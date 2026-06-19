document.addEventListener("DOMContentLoaded", () => {

    let contador = 0;

    const btnSurpresa = document.getElementById("btnSurpresa");
    const btnContador = document.getElementById("btnContador");

    /* BOTÃO SURPRESA */
    if (btnSurpresa) {
        btnSurpresa.addEventListener("click", () => {
            alert("🌸 Você está ajudando a construir um futuro mais sustentável! 💗");
        });
    }

    /* CONTADOR */
    if (btnContador) {
        btnContador.addEventListener("click", () => {
            contador++;
            document.getElementById("numero").innerText = contador;
        });
    }

    /* FAQ */
    document.querySelectorAll(".faq").forEach(item => {
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

    /* ANIMAÇÃO SCROLL PROFISSIONAL */
    const elementos = document.querySelectorAll("section, .card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("aparecer");
            }
        });
    }, {
        threshold: 0.2
    });

    elementos.forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });

});
