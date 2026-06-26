document.addEventListener("DOMContentLoaded", () => {

    /* LOADING */
    window.addEventListener("load", () => {
        setTimeout(() => {
            document.getElementById("loading").style.display = "none";
        }, 1000);
    });

    /* MENU MOBILE */
        /* MENU MOBILE */
    const menu = document.getElementById("menu");
    document.querySelector(".menu-toggle").addEventListener("click", () => {
        menu.classList.toggle("ativo");
    });

    /* CONTADOR */
    let contador = 0;
    document.getElementById("btnContador").addEventListener("click", () => {
        contador++;
        document.getElementById("numero").innerText = contador;
    });

    /* SURPRESA */
    document.getElementById("btnSurpresa").addEventListener("click", () => {
        alert("🌸 Você faz parte do futuro sustentável!");
    });

    /* FAQ */
    document.querySelectorAll(".faq").forEach(item => {
        item.addEventListener("click", () => {
            const id = item.dataset.id;
            const el = document.getElementById(id);
            el.style.display = el.style.display === "block" ? "none" : "block";
        });
    });

    /* FLASHCARDS */
    document.querySelectorAll(".flashcard").forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("virado");
        });
    });

});
// ================= ANIMAÇÃO DAS IMAGENS =================

const imagens = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

imagens.forEach(img => observer.observe(img));
// ================= ANIMAÇÃO DAS IMAGENS =================

const imagens = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

imagens.forEach(img => observer.observe(img));
