/* Biliboteca para acessar a pontuação, tamanho do card e da caixa. 
Além de gerar a pontuação final */

let blackjackGame = {
    'you': {
        'scoreSpan': '#your-blackjack-result',
        'div': '#your-box',
        'box-size': '.flex-blackjack-row-2 div',
        'socre': 0
    },

    'dealer': {
        'score-span': '#dealer-blackjack-result',
        'div': '#dealer-box',
        'box-size': '.flex-blackjack-row-2 div',
        'score': 0
    },

    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],

    'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11] },

    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'isTurnsOver': false,
    'pressOnce': false,
}

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

// Variáveis para renderizar o jogo conforme o tamanho da tela
let windowWidth = window.screen.width;
let windowHeight = window.screen.height;
let winner;

// Evento listener para os botões
document.querySelector("#blackjack-hit-button")
.addEventListener("click", blackjackHit);

// Variável para guardar o resultado da função randomCard
function blackjackHit() {
    if (blackjackGame['isStand'] === false) {
        let card = randomCard();
        console.log(card);
        showCard(card, YOU);
    }
}

// Função para gerar cartas aleatórias
function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `images/${card}.png`;
        cardImage.style = `width:${widthSize()}; height:${heightSize()}`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
    }
}

function widthSize() {
    if (windowWidth > 1000) {
        let newWidthSize = window.screen.width * 0.1;
        return newWidthSize;
    } else {
        return window.screen.width * 0.18;
    }
}

function heightSize() {
    if (windowHeight > 700) {
        let newHeightSize = window.screen.height * 0.18;
        return newHeightSize;
    } else {
        return window.screen.height * 0.15;
    }
}