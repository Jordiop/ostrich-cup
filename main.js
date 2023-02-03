// Cream sa array de objectes ostriches;
var interval;

function printScreen() {
    const app = document.getElementById("app");
    app.innerHTML = "";
    for (let i = 0; i < 4; i++) {
        let container = document.createElement("div");
        container.innerHTML = '<div class="flex"><img id="ostrich' + i + '" src="ostrich.gif" class="ostrich relative h-[8rem]" alt="ostrich"></div>'
        app.appendChild(container);
    }
    ostrichesList = document.getElementsByClassName("ostrich");
}

function race() {
    for (let i = 0; i < ostrichesList.length; i++) {
        if (ostrichesList[i].offsetLeft >= document.getElementById("app").offsetWidth - 50) {
            console.log("Ganó la " + i);
            reset();
        } else {
            let random = Math.floor(Math.random() * (10 - (1))) + (1);
            ostrichesList[i].style.left = ostrichesList[i].offsetLeft + random + "px";
            console.log(ostrichesList[i].offsetLeft);
        }
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
    interval = setInterval(race, 70);
}