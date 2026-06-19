document.addEventListener("DOMContentLoaded", () => {

    let contador = 0;

    document.getElementById("btnSurpresa").addEventListener("click", () => {
        alert("🌱 Você ajuda a construir um futuro melhor!");
    });

    document.getElementById("btnContador").addEventListener("click", () => {
        contador++;
        document.getElementById("numero").innerText = contador;
    });

    // FAQ
    document.querySelectorAll(".faq").forEach(item => {
        item.addEventListener("click", () => {
            const id = item.dataset.id;
            const resposta = document.getElementById(id);

            resposta.style.display =
                resposta.style.display === "block" ? "none" : "block";
        });
    });

    // FLASHCARDS
    document.querySelectorAll(".flashcard").forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("virado");
        });
    });

});
