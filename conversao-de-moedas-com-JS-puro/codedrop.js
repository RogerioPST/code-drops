const real = 5.18
const euro = 0.85
const libra = 0.77
const dolar = 1

const moedas = {
	EUR: euro, 
	LIB: libra, 
	BRL: real, 
	USD: dolar,
}



function calculaMoeda(valor, moedaEntrada, moedaSaida){
	return (valor / moedas[moedaEntrada]) * moedas[moedaSaida]
}

const formMoeda = document.getElementById('formMoeda')

let moedaOrigem = document.querySelector('#valorOrigem').value
let moedaDestino = document.querySelector('#valorDestino').value
let moedaTipoOrigem  = document.querySelector('#moedaTipoOrigem').value
let moedaTipoDestino = document.querySelector('#moedaTipoDestino').value

formMoeda.addEventListener('input', function(event){	
	console.log(event)
	

	if (event.target.name === 'valorOrigem'){
		moedaOrigem = event.target.value
	}
	else if (event.target.name === 'valorDestino'){
		moedaDestino = event.target.value
	}
	else if (event.target.name === 'moedaTipoOrigem'){
		moedaTipoOrigem = event.target.value
	}
	else if (event.target.name === 'moedaTipoDestino'){
		moedaTipoDestino = event.target.value
	}

	console.log(calculaMoeda(moedaOrigem, moedaTipoOrigem, moedaTipoDestino))
	
})

console.log(calculaMoeda(100, 'USD', 'LIB'))

