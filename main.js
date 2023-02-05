// Cream sa array de objectes ostriches;
var interval;
var numero;
var randomizador;

function printScreen() {
    const app = document.getElementById("app");
    app.innerHTML = "";
    numero = document.getElementById("numero").value;
    if (numero <= 0) {
        numero = 1;
    }
    for (let i = 0; i < numero; i++) {
        let container = document.createElement("div");
        container.innerHTML = '<div class="flex">' + i + '<img id="ostrich' + i + '" src="ostrich.gif" class="ostrich relative h-[8rem]" alt="ostrich"></div>'
        app.appendChild(container);
    }
    ostrichesList = document.getElementsByClassName("ostrich");
}

function race() {
    let game = true;
    let velocidad = document.getElementById("velocidad").value;
    if (velocidad == 1) {
        velocidad = 1;
    } else if (velocidad == 2) {
        velocidad = 2;
    } else if (velocidad == 3) {
        velocidad = 5;
    }
    console.log(velocidad)
    ostrichesList = document.getElementsByClassName("ostrich");
    randomizador = Math.floor(Math.random() * (numero));
    if (ostrichesList[randomizador].offsetLeft == 600) {
        console.log(ostrichesList[randomizador] + "murió")
        ostrichesList[randomizador].remove();
        ostrichesList = document.getElementsByClassName("ostrich");
    } else if (ostrichesList[randomizador].offsetLeft >= document.getElementById("app").offsetWidth - 50) {
        console.log("Ganó la " + randomizador);
        reset();
    } else {
        let random = Math.floor(Math.random() * (velocidad - (0)));
        ostrichesList[randomizador].style.left = ostrichesList[randomizador].offsetLeft + random + "px";
        console.log(ostrichesList[randomizador].offsetLeft);
    }
}




function destroy() {
    for (let j = 0; j < ostrichesList.length; j++) {
        ostrichesList[j].remove();
    }
}

function reset() {
    destroy;
    printScreen();
    clearInterval(interval);
}

function update() {
    printScreen();
    interval = setInterval(race, 10);
}