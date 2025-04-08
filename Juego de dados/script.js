let currentPlayer = 1;
let playerPosition = 0;
let computerPosition = 0;
const puntoGanador = 20;

const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const playerScoreElement = document.getElementById('playerScore');
const computerScoreElement = document.getElementById('computerScore');
const gameResultElement = document.getElementById('gameResult');
const rollButton = document.getElementById('rollButton');
const reglas = document.getElementById('reglas');
const pantallaReglas = document.getElementById('reglas');
const tablero = document.getElementById('tablero');
const botonIniciar = document.getElementById('botonIniciar');
const jugadores = document.getElementById('game-container');

function crearFichas() {
    // Crear ficha del jugador 1
    const fichaJugador1 = document.createElement('div');
    fichaJugador1.id = 'fichaJugador1';
    fichaJugador1.className = 'ficha jugador1';
    document.querySelector('.a').appendChild(fichaJugador1);
    
    // Crear ficha del jugador 2
    const fichaJugador2 = document.createElement('div');
    fichaJugador2.id = 'fichaJugador2';
    fichaJugador2.className = 'ficha jugador2';
    document.querySelector('.a').appendChild(fichaJugador2);
}

// Mapeo de números a letras (para casillas)
const posicionesTablero = {
    0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e',
    5: 'f', 6: 'g', 7: 'h', 8: 'i', 9: 'j',
    10: 'k', 11: 'l', 12: 'm', 13: 'n', 14: 'o',
    15: 'p', 16: 'q', 17: 'r', 18: 's', 19: 't'
};

function moverFicha(jugador, posicionAnterior, nuevaPosicion) {
    if (nuevaPosicion > 19) nuevaPosicion = 19;
    
    const idFicha = jugador === 1 ? 'fichaJugador1' : 'fichaJugador2';
    const ficha = document.getElementById(idFicha);

    if (!ficha) return;
    if (posicionAnterior >= 0) {
        const casillaAnterior = document.querySelector(`.${posicionesTablero[posicionAnterior]}`);
        if (casillaAnterior && casillaAnterior.contains(ficha)) {
            casillaAnterior.removeChild(ficha);
        }
    }

    const nuevaCasilla = document.querySelector(`.${posicionesTablero[nuevaPosicion]}`);
    if (nuevaCasilla) {
        nuevaCasilla.appendChild(ficha);
        
        ficha.style.animation = 'bounce 0.5s ease';
        setTimeout(() => {
            ficha.style.animation = '';
        }, 500);
    }
}

// Inicializar el juego
botonIniciar.addEventListener('click', function() {
    pantallaReglas.style.display = 'none';
    tablero.style.display = 'block';
    jugadores.style.display = 'block';
    
    // Reiniciar posiciones
    playerPosition = 0;
    computerPosition = 0;
    
    // Crear fichas en la posición inicial
    crearFichas();
});

function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

function showDice(dice1Value, dice2Value) {
    // Añadir animación de dados girando
    dice1.classList.add('rolling');
    dice2.classList.add('rolling');
    
    setTimeout(() => {
        dice1.textContent = dice1Value;
        dice2.textContent = dice2Value;
        dice1.className = `dice dice-${dice1Value}`;
        dice2.className = `dice dice-${dice2Value}`;
    }, 500);
}

function cambiarJugador() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
}

function playRound() {
    // Deshabilitar el botón mientras se lanza el dado
    rollButton.disabled = true;
    
    const dice1Value = lanzarDado();
    const dice2Value = lanzarDado();
    const totalRoll = dice1Value + dice2Value;

    showDice(dice1Value, dice2Value);
    
    setTimeout(() => {
        if (currentPlayer === 1) {
            if (dice1Value === 1 || dice2Value === 1) {
                playerPosition = 0;
                playerScoreElement.textContent = playerPosition;
                gameResultElement.textContent = 'Jugador 1 sacó 1. Vuelve al inicio.';
                moverFicha(1, playerPosition, 0);
                cambiarJugador();
            } else {
                const posicionAnterior = playerPosition;
                playerPosition += totalRoll;
                
                if (playerPosition > 19) {
                    playerPosition = 19; // No pasar de la casilla final (la 20)
                }
                
                playerScoreElement.textContent = playerPosition + 1; 
                gameResultElement.textContent = `Jugador 1 avanza ${totalRoll} casillas`;
            
                moverFicha(1, posicionAnterior, playerPosition);
            }

            if (playerPosition >= 19) { // 19 es la última casilla (la 20)
                gameResultElement.textContent = '¡Jugador 1 gana la partida!';
                rollButton.disabled = true;
            } else {
                setTimeout(() => {
                    cambiarJugador();
                    rollButton.disabled = false;
                }, 1000);
            }
        } 
        else {
            if (dice1Value === 1 || dice2Value === 1) {
                computerPosition = 0;
                computerScoreElement.textContent = computerPosition;
                gameResultElement.textContent = 'Jugador 2 sacó 1. Vuelve al inicio.';
                moverFicha(2, computerPosition, 0);
                cambiarJugador();
            } else {
                const posicionAnterior = computerPosition;
                computerPosition += totalRoll;
                
                if (computerPosition > 19) {
                    computerPosition = 19; // No pasar de la casilla final (la 20)
                }
                
                computerScoreElement.textContent = computerPosition + 1; // +1 porque visualmente empieza en 1
                gameResultElement.textContent = `Jugador 2 avanza ${totalRoll} casillas`;
                
                // Mover la ficha visualmente
                moverFicha(2, posicionAnterior, computerPosition);
            }

            if (computerPosition >= 19) { // 19 es la última casilla (la 20)
                gameResultElement.textContent = '¡Jugador 2 gana la partida!';
                rollButton.disabled = true;
            } else {
                setTimeout(() => {
                    cambiarJugador();
                    rollButton.disabled = false;
                }, 1000);
            }
        }
    }, 600);
}

// Reiniciar juego
function reiniciarJuego() {
    currentPlayer = 1;
    playerPosition = 0;
    computerPosition = 0;
    playerScoreElement.textContent = '0';
    computerScoreElement.textContent = '0';
    gameResultElement.textContent = '';
    rollButton.disabled = false;
    
    // Remover fichas existentes
    const fichaJugador1 = document.getElementById('fichaJugador1');
    const fichaJugador2 = document.getElementById('fichaJugador2');
    
    if (fichaJugador1) fichaJugador1.remove();
    if (fichaJugador2) fichaJugador2.remove();
    
    // Crear nuevas fichas en posición inicial
    crearFichas();
}