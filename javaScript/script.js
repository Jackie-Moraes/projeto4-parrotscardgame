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


iniciarJogo()

function virarCarta(carta) {
    carta.classList.toggle("virada");
    tentativas++;
}

function iniciarJogo() {
    while (qntCartas < 4 || qntCartas > 14 || qntCartas % 2 === 1) {
        qntCartas = prompt("Com quantas cartas quer jogar? (Escolha um valor par de 4 a 14)");
    }
}




function definirCartasEmJogo(imagens) {
    imagens.lenght = qntCartas / 2;

    for (let i = 0; i < imagens.lenght; i++) {
        cartasEmJogo.push(imagens[i]);
        cartasEmJogo.push(imagens[i]);
        
    }

    cartasEmJogo.sort(comparador);

    function comparador() { 
        return Math.random() - 0.5; 
    }
}





function distribuirCartasEmJogo(cartasEmJogo) {


    // Pergutar pro Tutor
    // for (let i = 0; i < cartasEmJogo.lenght; i++) {

    for (let i = 0; i < qntCartas; i++) {
        conteudo +=
        `<div class="card" onclick="virarCarta(this)">
            <div class="frente face">
                <img src="images/front.png" alt="Papagaio">
            </div>

            <div class="verso face">
                <img src="${cartasEmJogo[i]}" alt="Papagaio estilizado">
            </div>
        </div>`;
    }
    document.querySelector('.container').innerHTML = conteudo;
}

definirCartasEmJogo(imagens);
distribuirCartasEmJogo(cartasEmJogo);