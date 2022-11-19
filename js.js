let personaje = document.querySelector(".personaje")
let contador = document.querySelector(".contador")
let restante_dom = document.querySelector(".restante")
let coin = document.querySelector(".coin")

var desi = 0
var pun = 0
var restante = 60
var opor = true
var Ost = true
const ost = new Audio("ost.mp3");

window.addEventListener('keydown', Mi_función);
function Mi_función(e) {
    if(contador.textContent != "Puntuacion: 25/25" && opor == true)
    {
        if(Ost == true)
        {
            ost.play();
            Ost = false
        }

        // Izquierda
        if (e.keyCode == '37') {
            personaje.src = "dooña.png"
            let left = window.getComputedStyle(personaje);
            let left_value = left.getPropertyValue('left');
            let nuevo_punto = parseInt(left_value) - 50


            if (nuevo_punto > -1) {
                personaje.style.left = `${nuevo_punto}px`
            }
            else {
                personaje.style.left = `0px`
            }

            let coin_p = window.getComputedStyle(coin);
            let coin_value = coin_p.getPropertyValue('left');

            let diferencia = parseInt(nuevo_punto) - parseInt(coin_value)

            if (diferencia < 26 && diferencia > -26) {
                pun = pun + 1
                contador.textContent = `Puntuacion: ${pun}/25`

                const audio = new Audio("sonido.mp3");
                audio.play();

                let myNumeroAleatorio = Math.floor(Math.random() * 1301)

                while (myNumeroAleatorio < 0) {
                    myNumeroAleatorio = Math.floor(Math.random() * 1301)
                }

                coin.style.left = `${myNumeroAleatorio}px`
            }
        }
        // Derecha
        else if (e.keyCode == '39') {
            personaje.src = "dooña - copia.png"
            let right = window.getComputedStyle(personaje);
            let right_value = right.getPropertyValue('left');
            let nuevo_punto = parseInt(right_value) + 50

            if (nuevo_punto < 1301) {
                personaje.style.left = `${nuevo_punto}px`
            }
            else {
                personaje.style.left = `1300px`
            }

            let coin_p = window.getComputedStyle(coin);
            let coin_value = coin_p.getPropertyValue('left');

            let diferencia = parseInt(nuevo_punto) - parseInt(coin_value)

            if (diferencia < 26 && diferencia > -26) {
                pun = pun + 1
                contador.textContent = `Puntuacion: ${pun}/25`

                const audio = new Audio("sonido.mp3");
                audio.play();

                let myNumeroAleatorio = Math.floor(Math.random() * 101)

                while (myNumeroAleatorio < 0) {
                    myNumeroAleatorio = Math.floor(Math.random() * 101)
                }

                coin.style.left = `${myNumeroAleatorio}px`
            }
        }
        // Arriba
        else if (e.keyCode == '38') {
            let top = window.getComputedStyle(personaje);
            let top_value = top.getPropertyValue('top');

            if (top_value == "360px") {
                let nuevo_punto = parseInt(top_value) - 200
                personaje.style.top = `${nuevo_punto}px`

                setTimeout(function () {
                    let bajar = parseInt(nuevo_punto) + 200
                    personaje.style.top = `${bajar}px`
                }, 300)
            }
            else {
                personaje.style.top = `360px`
            }
        }
        // Abajo
        else if (e.keyCode == '40') {
            const audio = new Audio("peo.mp3");
            audio.play();
        }
    }
    else if(contador.textContent == "Puntuacion: 25/25")
    {
        alert("Ganaste el juego")
    }
}

setInterval(function(){

    if(restante > 0)
    {
        restante = restante - 1
        restante_dom.textContent = `Tiempo restante: ${restante} segundos`
    }
    else if(restante <=0 && opor == true)
    {
        ost.pause()
        opor = false
        alert("Has perdido")
    }

},1000)