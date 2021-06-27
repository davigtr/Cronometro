function criaSegundos(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone: 'GMT'
    })
}

const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const zerar = document.querySelector('.zerar')
const pausar = document.querySelector('.pausar')

let seconds = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval( function(){
        seconds++
        relogio.innerHTML = criaSegundos(seconds)
    }, 1000)
}

iniciar.addEventListener('click', function (event) {
    clearInterval(timer)
    relogio.classList.remove('pausado')
    iniciaRelogio()
});

pausar.addEventListener('click', function (event) {
    relogio.classList.add('pausado')
    clearInterval(timer)
});

zerar.addEventListener('click', function (event) {
    clearInterval(timer)
    relogio.classList.remove('pausado')
    relogio.innerHTML = '00:00:00'
    seconds = 0
});