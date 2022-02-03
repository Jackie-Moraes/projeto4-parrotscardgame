let qntCartas = 0;
let tentativas = 0;

let imagens = [
    'images/bobrossparrot.gif',
    'images/explodyparrot.gif',
    'images/fiestaparrot.gif',
    'images/metalparrot.gif',
    'images/revertitparrot.gif',
    'images/tripletsparrot.gif',
    'images/unicornparrot.gif'
]

let conteudo = "";
let cartasEmJogo = [];
let matchCartas = [];
let qntMatches = 0;
let numeroCartasEmJogo = 0;

iniciarJogo()


function iniciarJogo() {
    while (qntCartas < 4 || qntCartas > 14 || qntCartas % 2 === 1) {
        qntCartas = prompt("Com quantas cartas quer jogar? (Escolha um valor par de 4 a 14)");
    }

    definirCartasEmJogo(imagens.sort(comparador));
    distribuirCartasEmJogo(cartasEmJogo);
}

function virarCarta(carta) {

    carta.classList.toggle('virada');
    let cardVerso = carta.querySelector('.verso');
    let cardFrente = carta.querySelector('.frente');
    cardVerso.classList.remove('escondido');    
    cardFrente.classList.add('escondido');

    matchCartas.push(carta);
    verificarCartas();
    tentativas++;

}

function definirCartasEmJogo(imagens) {
    
    numeroCartasEmJogo = qntCartas / 2;

    for (let i = 0; i < numeroCartasEmJogo; i++) {
        cartasEmJogo.push(imagens[i]);
        cartasEmJogo.push(imagens[i]);
    }

    cartasEmJogo.sort(comparador);

    
}


function distribuirCartasEmJogo(cartasEmJogo) {

    for (let i = 0; i < qntCartas; i++) {
        conteudo +=
        `<div class="card" onclick="virarCarta(this)" data-identifier="card">
            <div class="frente face" data-identifier="front-face">
                <img src="images/front.png" alt="Papagaio">
            </div>

            <div class="verso face escondido" data-identifier="back-face">
                <img src="${cartasEmJogo[i]}" alt="Papagaio estilizado">
            </div>
        </div>`;
    }
    document.querySelector('.container').innerHTML = conteudo;
}


function verificarCartas() {
    

    let primeiroCardFrente = matchCartas[0].querySelector('.frente');
    let primeiroCardVerso = matchCartas[0].querySelector('.verso');
    let segundoCardFrente = matchCartas[1].querySelector('.frente');
    let segundoCardVerso = matchCartas[1].querySelector('.verso');
    

    if (matchCartas[0].innerHTML === matchCartas[1].innerHTML && matchCartas[1] !== undefined) {
        
        matchCartas.splice(0);
        matchCartas.splice(1);
        qntMatches++;
        verificarFim();
    } else if (matchCartas[1] !== undefined) {

        setTimeout( () => {
            primeiroCardFrente.classList.remove('escondido')
            primeiroCardVerso.classList.add('escondido')
            segundoCardFrente.classList.remove('escondido')
            segundoCardVerso.classList.add('escondido')
            matchCartas[0].classList.toggle('virada');
            matchCartas[1].classList.toggle('virada');
            matchCartas.splice(0);
            matchCartas.splice(1);
        }, 1000)

    }

}


function verificarFim() {
    
    setTimeout( () => {
        if (qntMatches == numeroCartasEmJogo) {
            alert (`Você conseguiu em ${tentativas} tentativas!`)
            let novamente = prompt("Gostaria de jogar novamente? (Responda com y/Y se sim)")
            if(novamente === "y" || novamente === "Y") {
                document.querySelector('section').innerHTML = "";
                qntCartas = 0;
                tentativas = 0;
                conteudo = "";
                qntMatches = 0;
                cartasEmJogo = [];
                numeroCartasEmJogo = 0;
                iniciarJogo();
            }
        }
    }, 500)
}


function comparador() { 
    return Math.random() - 0.5; 
}