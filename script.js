// ==========================
// BOTÃO VOLTAR AO TOPO
// ==========================

const botaoTopo = document.getElementById("topo");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        botaoTopo.style.display = "block";

    } else {

        botaoTopo.style.display = "none";

    }

});

botaoTopo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==========================
// MODO ESCURO
// ==========================

const modo = document.getElementById("modoEscuro");

modo.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        modo.innerHTML = "☀️";

    }else{

        modo.innerHTML = "🌙";

    }

});

// ==========================
// CONTADORES
// ==========================

const numeros = document.querySelectorAll(".numero");

numeros.forEach(numero => {

    const objetivo = +numero.dataset.numero;

    let atual = 0;

    const incremento = objetivo / 120;

    const atualizar = () => {

        atual += incremento;

        if(atual < objetivo){

            numero.innerText = Math.floor(atual);

            requestAnimationFrame(atualizar);

        }else{

            numero.innerText = objetivo;

        }

    };

    atualizar();

});

// ==========================
// QUIZ
// ==========================

const respostas = document.querySelectorAll(".resposta");

const resultado = document.getElementById("resultadoQuiz");

respostas.forEach(botao => {

    botao.addEventListener("click", () => {

        if(botao.dataset.correta === "true"){

            resultado.innerHTML = "🎉 Parabéns! Você acertou!";

            resultado.style.color = "#3CB371";

        }else{

            resultado.innerHTML = "❌ Resposta incorreta. Tente novamente!";

            resultado.style.color = "#FF4F7A";

        }

    });

});

// ==========================
// ANIMAÇÃO DOS CARDS
// ==========================

const cards = document.querySelectorAll(".card");

const aparecer = () => {

    cards.forEach(card => {

        const posicao = card.getBoundingClientRect().top;

        if(posicao < window.innerHeight - 100){

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }

    });

};

window.addEventListener("scroll", aparecer);

aparecer();

// ==========================
// FORMULÁRIO
// ==========================

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    alert("🌸 Obrigado pela sua mensagem!");

    formulario.reset();

});
