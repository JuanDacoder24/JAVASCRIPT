let currentPlayer = 1;
let playerScore = 0;
let computerScore = 0;
const puntoGanador = 20;

const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const playerScoreElement = document.getElementById('playerScore');
const computerScoreElement = document.getElementById('computerScore');
const gameResultElement = document.getElementById('gameResult');
const rollButton = document.getElementById('rollButton');
const reglas = document.getElementById('reglas');
const cuerpoPrincipal = document.querySelector('cuerpo');
const pantallaReglas = document.getElementById('reglas');
const tablero = document.getElementById('tablero');
const botonIniciar = document.getElementById('botonIniciar');
const jugadores = document.getElementById('game-container');

botonIniciar.addEventListener('click', function() {
    pantallaReglas.style.display = 'none';
    tablero.style.display = 'block';
    jugadores.style.display = 'block';
});

function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

function showDice(dice1Value, dice2Value) {
    dice1.textContent = dice1Value;
    dice2.textContent = dice2Value;
    dice1.className = `dice dice-${dice1Value}`;
    dice2.className = `dice dice-${dice2Value}`;
}

function cambiarJugador() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
}

function playRound() {
    const dice1Value = lanzarDado();
    const dice2Value = lanzarDado();
    const totalRoll = dice1Value + dice2Value;

    showDice(dice1Value, dice2Value);

    if (currentPlayer === 1) {
        if (dice1Value === 1 || dice2Value === 1) {

            playerScore = 0;
            playerScoreElement.textContent = playerScore;
            gameResultElement.textContent = 'Jugador 1 sacó 1. Pierde todos los puntos.';
            cambiarJugador();
        } else {
            playerScore += totalRoll;
            playerScoreElement.textContent = playerScore;
            gameResultElement.textContent = `Jugador 1 suma ${totalRoll} puntos`;
        }

        if (playerScore >= puntoGanador) {
            gameResultElement.textContent = '¡Jugador 1 gana la partida!';
            rollButton.disabled = true;
        }
    } 
    else {
        if (dice1Value === 1 || dice2Value === 1) {
            
            computerScore = 0;
            computerScoreElement.textContent = computerScore;
            gameResultElement.textContent = 'Jugador 2 sacó 1. Pierde todos los puntos.';
            cambiarJugador();
        } else {
            
            computerScore += totalRoll;
            computerScoreElement.textContent = computerScore;
            gameResultElement.textContent = `Jugador 2 suma ${totalRoll} puntos`;
        }

        if (computerScore >= puntoGanador) {
            gameResultElement.textContent = '¡Jugador 2 gana la partida!';
            rollButton.disabled = true;
        }
    }
}

botonIniciar.addEventListener('click', function() {
    // Ocultar reglas y mostrar juego
    reglas.style.display = 'none';
    cuerpoPrincipal.style.display = 'block';
});

// Inicialmente ocultar el cuerpo principal
cuerpoPrincipal.style.display = 'none';