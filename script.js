let CampoPeso = document.getElementById('peso')
let CampoAltura = document.getElementById('altura')
let res = document.getElementById('resultado')

const Calcular = document.getElementById('BtnCalcular')
const Limpar = document.getElementById('BtnLimpar')

function CalcularIMC() {
    let peso = Number(CampoPeso.value)
    let altura = Number(CampoAltura.value)

    let IMC = peso / (altura * altura)

    res.innerHTML = IMC.toFixed(2)
}

function reset() {
    res.innerHTML = ''

    CampoAltura.value = ''
    CampoPeso.value = ''
}

console.log('ola')