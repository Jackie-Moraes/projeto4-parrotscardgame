let qntCartas = 0;
let tentativas = 0;

// iniciarJogo()

function virarCarta(carta) {
    carta.classList.toggle("virada");

    tentativas++;
}

function iniciarJogo() {
    while (qntCartas < 4 || qntCartas > 14 || qntCartas % 2 === 1) {
        qntCartas = prompt("Com quantas cartas quer jogar? (Escolha um valor par de 4 a 14)");
    }
}