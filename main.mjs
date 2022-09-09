// import pkg from "./data.js"
// const frases = pkg

const frases = [
    // "Lo que conocemos es una gota, lo que no conocemos es un oceano.",
    // "El aprendizaje es la ciencia, todo lo demás es información.",
    "La ciencia nunca resuelve un problema sin crear otros 10 más (así como el css).",
    // "Esfuerzate por progresos, no por perfección.",
    // "Existen oportunidades secretas dentro de cada fracaso.",
    // "Si el plan no funciona, cambia el plan, pero no la meta.",
    // ".   .   ."
]
const mecano = document.getElementById("mecano")
const logo = document.querySelector(".logo")

function mecanography() {

    let interval = 15000;
    let intervaloFrase = function(){
        frases.forEach((mode, index) => {

            setTimeout(() => {
                let arr = mode.split("")
                // let x = ""
                let html = ""
                let i = 0
                let intervaloLetras = setInterval(function(){
                    // x += arr[i]
                    html += arr[i]
                    mecano.innerText = html
                    // console.log(x);
                    i++
                    if(i === arr.length){
                        clearInterval(intervaloLetras)
                    }
                }, 80)
            }, index * interval)
        })
    }
    intervaloFrase()
    setInterval(intervaloFrase, frases.length * interval)
}

logo.addEventListener("click", function(){
    console.log(this);
})
mecanography()
