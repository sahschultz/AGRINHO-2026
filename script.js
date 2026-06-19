document.addEventListener("DOMContentLoaded", () => {

    /* ===================== CONTADOR ===================== */
    let contador = 0;
    const numero = document.getElementById("numero");
    const btnContador = document.getElementById("btnContador");

    if (btnContador) {
        btnContador.addEventListener("click", () => {
            contador++;
            numero.innerText = contador;

            // pequeno efeito visual
            numero.style.transform = "scale(1.3)";
            numero.style.color = "#ff3399";

            setTimeout(() => {
                numero.style.transform = "scale(1)";
            }, 200);
        });
    }

    /* ===================== BOTÃO SURPRESA ===================== */
    const btnSurpresa = document.getElementById("btnSurpresa");

    if (btnSurpresa) {
        btnSurpresa.addEventListener("click", () => {
            alert("🌸 Você está ajudando a construir um futuro mais sustentável!");
        });
    }

    /* ===================== FAQ INTERATIVO ===================== */
    document.querySelectorAll(".faq").forEach(item => {
        item.addEventListener("click", () => {
            const id = item.dataset.id;
            const resposta = document.getElementById(id);

            if (resposta.style.display === "block") {
                resposta.style.display = "none";
            } else {
                resposta.style.display = "block";
            }
        });
    });

    /* ===================== FLASHCARDS ===================== */
    document.querySelectorAll(".flashcard").forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("virado");
        });
    });

    /* ===================== ANIMAÇÃO AO ROLAR ===================== */
    const elementos = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                entry.target.style.transition = "0.8s ease";
            }
        });
    }, { threshold: 0.2 });

    elementos.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        observer.observe(el);
    });

});
