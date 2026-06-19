document.addEventListener("DOMContentLoaded", () => {

    let contador = 0;

    const numero = document.getElementById("numero");
    const btnContador = document.getElementById("btnContador");
    const btnSurpresa = document.getElementById("btnSurpresa");

    /* ================= SURPRESA ================= */
    btnSurpresa?.addEventListener("click", () => {
        alert("🌸 Você está ajudando o planeta com escolhas sustentáveis!");
    });

    /* ================= CONTADOR ================= */
    btnContador?.addEventListener("click", () => {
        contador++;
        numero.innerText = contador;

        numero.style.transform = "scale(1.3)";
        setTimeout(() => numero.style.transform = "scale(1)", 200);
    });

    /* ================= FAQ ================= */
    document.querySelectorAll(".faq").forEach(item => {
        item.addEventListener("click", () => {
            const id = item.dataset.id;
            const resposta = document.getElementById(id);

            resposta.style.display =
                resposta.style.display === "block" ? "none" : "block";
        });
    });

    /* ================= FLASHCARDS ================= */
    document.querySelectorAll(".flashcard").forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("virado");
        });
    });

    /* ================= SCROLL ANIMATION ================= */
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("ativo");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(sec => observer.observe(sec));

});
