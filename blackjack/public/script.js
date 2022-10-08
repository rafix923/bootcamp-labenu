// Biliboteca para acessar a pontuação, tamanho do card e da caixa 
// Além de gerar a pontuação final 

let blackjackGame = {
    player: {
        scoreSpan: '#player-blackjack-result',
        div: '#player-box',
        boxSize: '.flex-blackjack-row-2 div',
        score: 0
    },

    dealer: {
        scoreSpan: '#dealer-blackjack-result',
        div: '#dealer-box',
        boxSize: '.flex-blackjack-row-2 div',
        score: 0
    },

    cards: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],

    cardsMap: { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11] },

    wins: 0,
    losses: 0,
    draws: 0,
    isStand: false,
    isTurnsOver: false,
    pressOnce: false,
}

// Variáveis

const PLAYER = blackjackGame['player'];
const DEALER = blackjackGame['dealer'];
let winner;

// Event listeners para os botões

document.querySelector("#hit-button").addEventListener("click", blackjackHit);
document.querySelector("#stand-button").addEventListener("click", blackjackStand);
document.querySelector("#deal-button").addEventListener("click", blackjackDeal);
document.querySelector("#reset-button").addEventListener("click", blackjackRestart);

// Variável para guardar o resultado da função randomCard

function blackjackHit() {
    if (blackjackGame['isStand'] === false) {
        let card = randomCard();
        showCard(card, PLAYER);
        updateScore(card, PLAYER);
        showScore(PLAYER)
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
        document.querySelector(activePlayer['div']).appendChild(cardImage);
    }
}

// Funções para gerar e atualizar pontuação

function updateScore(card, activePlayer) {
    if (card === 'A') {
        if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    } else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'Bust!';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

// Função para cartas e pontuações do Dealer

function blackjackStand() {
    if (blackjackGame.pressOnce === false) {
        blackjackGame['isStand'] = true;
        let playerImages = document.querySelector('#player-box').querySelectorAll('img');

        for (let i = 0; i < playerImages.length; i++) {
            let card = randomCard();
            showCard(card, DEALER);
            updateScore(card, DEALER);
            showScore(DEALER);
        }
        blackjackGame['isTurnsOver'] = true;
        computeWinner();
        showWinner(winner);
    }
    blackjackGame.pressOnce = true;
}

// Função para apresentar o vencedor

function computeWinner() {
    if (PLAYER['score'] <= 21) {
        if (PLAYER['score'] > DEALER['score'] || DEALER['score'] > 21) {
            winner = PLAYER;
        } else if (PLAYER['score'] < DEALER['score']) {
            winner = DEALER;
        } else if (PLAYER['score'] === DEALER['score']) {
            winner = 'Draw';
        }
    } else if (PLAYER['score'] > 21 && DEALER['score'] <= 21) {
        winner = DEALER;
    } else if (PLAYER['score'] > 21 && DEALER['score'] > 21) {
        winner = 'none'
    }
    return winner;
}

function showWinner(winner) {
    let message, messageColor;

    if (winner === PLAYER) {
        message = "Você Venceu!";
        messageColor = 'blue';
        messageSize = '1.8rem';
        messageWeight = 'bold';
        document.querySelector('#wins').textContent = blackjackGame['wins'] += 1;
    } else if (winner === DEALER) {
        message = 'Dealer Venceu!';
        messageColor = 'red';
        messageSize = '1.8rem';
        messageWeight = 'bold';
        document.querySelector('#losses').textContent = blackjackGame['losses'] += 1;
    } else if (winner === 'Draw') {
        message = 'Tivemos um Empate!';
        messageColor = 'yellow';
        messageSize = '1.8rem';
        messageWeight = 'bold';
        document.querySelector('#draws').textContent = blackjackGame['draws'] += 1;
    } else if (winner === 'None') {
        message = 'Vocês dois tiveram um bust!';
        messageColor = 'orange';
        messageSize = '1.8rem';
        messageWeight = 'bold';
    }
    document.querySelector('#blackjack-result').textContent = message;
    document.querySelector('#blackjack-result').style.color = messageColor;
    document.querySelector('#blackjack-result').style.fontSize = messageSize;
    document.querySelector('#blackjack-result').style.fontWeight = messageWeight;
}

// Funcionalidade para encerrar e começar nova partida sem perder as pontuações 

function blackjackDeal() {
    if (blackjackGame['isTurnsOver'] === true) {

        // Seleciona todas as imagens e dealer box
        let playerImages = document.querySelector('#player-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

        // Define pontuação do jogador e do dealer para zero
        PLAYER['score'] = DEALER['score'] = 0;
        document.querySelector('#player-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;


        // Altera a cor da mensagem
        document.querySelector('#blackjack-result').style.color = 'black';
        document.querySelector('#blackjack-result').style.fontSize = '32px';

        // Chama para mais uma partida
        document.querySelector('#blackjack-result').textContent = 'Vamos Jogar!';

        // Recolhe as cartas
        for (let i = 0; i < playerImages.length; i++) {
            playerImages[i].remove();
            dealerImages[i].remove();
        }
        blackjackGame['isStand'] = false;
        blackjackGame.pressOnce = false;
        blackjackGame['isTurnsOver'] = false;
    }
}

// Função para resetar o jogo
function blackjackRestart() {

    blackjackDeal();
    document.querySelector('#wins').textContent = 0;
    document.querySelector('#losses').textContent = 0;
    document.querySelector('#draws').textContent = 0;

    blackjackGame.wins = 0;
    blackjackGame.losses = 0;
    blackjackGame.draws = 0;
}