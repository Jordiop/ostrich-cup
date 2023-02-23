// Cream sa array de objectes ostriches;
var interval;
var numero;
var randomizador;
var dinero;

// Aquesta funció s'executa quan carreguem la pàgina
// Inicialitza totes les estruços de la petició de l'html amb manipulació del DOM

function printScreen() {
    const app = document.getElementById("app");
    app.innerHTML = "";
    // Si l'usuari ens demana menys de un estruç, li donem un
    numero = document.getElementById("numero").value;
    if (numero <= 0) {
        numero = 1;
    }
    for (let i = 0; i < numero; i++) {
        let container = document.createElement("div");
        container.innerHTML = '<div class="flex">' + i + '<img id="ostrich' + i + '" src="../assets/ostrich.gif" class="ostrich relative h-[8rem]" alt="ostrich"></div>'
        app.appendChild(container);
    }
    // Aquí guardem la llista de les estruços, que com que es class, és un array quan la cridam
    ostrichesList = document.getElementsByClassName("ostrich");
}

function race() {
    let ganadora = document.getElementById("ganadora").value;
    let game = true;
    let velocidad = document.getElementById("velocidad").value;
    // Obtenim la velocitat de la carrera introduïda per l'usuari
    if (velocidad == 1) {
        velocidad = 1;
    } else if (velocidad == 2) {
        velocidad = 2;
    } else if (velocidad == 3) {
        velocidad = 5;
    }
    // Tornem a obtenir la llista de les estruços, perquè si no, no es veuen els moviments
    ostrichesList = document.getElementsByClassName("ostrich");
    // Obtenim la estruç a la que li toca moure's, de manera aleatòria
    randomizador = Math.floor(Math.random() * (numero));
    // Se comprova si la estruç ha arribat a la meta, i si ho ha fet, s'acaba la carrera, si no ho ha fet, es mou
    if (ostrichesList[randomizador].offsetLeft >= document.getElementById("app").offsetWidth - 50) {
        alert("Ganó la " + randomizador);
        if (ganadora == randomizador) {
            alert("Has ganado");
        } else {
            alert("Has perdido");
        }
        reset();
    } else {
        let random = Math.floor(Math.random() * (velocidad - (0)));
        ostrichesList[randomizador].style.left = ostrichesList[randomizador].offsetLeft + random + "px";
    }
}

// Funció per a eliminar els estruços
function destroy() {
    for (let j = 0; j < ostrichesList.length; j++) {
        ostrichesList[j].remove();
    }
}

// Funció per a reiniciar la carrera
function reset() {
    destroy;
    printScreen();
    clearInterval(interval);
}

// Funció per a començar la carrera
function update() {
    printScreen();
    let ganadora = document.getElementById("ganadora").value;
    if (ganadora == null) {
        alert("No has seleccionado ninguna apuesta, así que no ganas nada");
    }
    interval = setInterval(race, 10);
}