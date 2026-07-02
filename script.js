document.addEventListener("DOMContentLoaded", () => {

    window.addEventListener("load", () => {
        setTimeout(() => {
            document.getElementById("loading").style.display = "none";
        }, 1000);
    });

    const menu = document.getElementById("menu");
    document.querySelector(".menu-toggle").addEventListener("click", () => {
        menu.classList.toggle("ativo");
    });

    let contador = 0;
    document.getElementById("btnContador").addEventListener("click", () => {
        contador++;
        document.getElementById("numero").innerText = contador;
    });

    document.getElementById("btnSurpresa").addEventListener("click", () => {
        alert("🌸 Você faz parte do futuro sustentável!");
    });

    document.querySelectorAll(".faq").forEach(item => {
        item.addEventListener("click", () => {
            const id = item.dataset.id;
            const resposta = document.getElementById(id);

            resposta.style.display =
                resposta.style.display === "block" ? "none" : "block";
        });
    });

    document.querySelectorAll(".flashcard").forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("virado");
        });
    });

    const imagens = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    });

    imagens.forEach(img => observer.observe(img));
});
