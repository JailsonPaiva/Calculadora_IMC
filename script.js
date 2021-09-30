let CampoPeso = document.getElementById('peso')
let CampoAltura = document.getElementById('altura')
let res = document.getElementById('resultado')

const Calcular = document.getElementById('BtnCalcular')
const Limpar = document.getElementById('BtnLimpar')

function CalcularIMC() {
    let peso = Number(CampoPeso.value)
    let altura = Number(CampoAltura.value)

    let IMC = (peso / (altura * altura)).toFixed(2)

    //res.innerHTML = IMC.toFixed(2)
    if (IMC == 'NaN') {
        res.innerHTML = 'Digite um valor válido'
    } if (IMC < 18.5){
        res.innerHTML = `IMC: ${IMC}, abaixo do peso`
    } if (IMC >= 18.5 && IMC <= 24.9) {
        res.innerHTML = `IMC: ${IMC}, peso normal`
    }  if (IMC >= 25 && IMC <= 29.9) {
        res.innerHTML = `IMC: ${IMC}, sobrepeso`
    }  if (IMC >= 30 && IMC <= 34.9) {
        res.innerHTML = `IMC: ${IMC}, obesidade grau I`
    }  if (IMC >= 35 && IMC <= 39.9) {
        res.innerHTML = `IMC: ${IMC}, obesidade grau II`
    }  if (IMC >= 40) {
        res.innerHTML = `IMC: ${IMC}, Obesidade grau III ou mórbida`
    }
}

function reset() {
    res.innerHTML = ''

    CampoAltura.value = ''
    CampoPeso.value = ''
}