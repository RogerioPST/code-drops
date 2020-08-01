//rodar c npx serve
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

/*
	o document.querySelector vai buscar em toda a DOM, o q pode n
	ser tao performatico assim.
	em vez disso, pode usar o proprio form e procurar somente nele
	por querySelector ou pelo nome do input/select etc.
*/

/*
Refatorando para eliminar os if, else if que existiam dentro
de "formMoeda.addEventListener" abaixo, que verificavam se
tinha ocorrido um listener no input p atribuir o valor p a 
variavel
*/
const formData ={
	valorOrigem: formMoeda.querySelector('#valorOrigem').value, 
	valorDestino: formMoeda.valorDestino.value,
	moedaTipoOrigem: formMoeda.moedaTipoOrigem.value,
	moedaTipoDestino: formMoeda.moedaTipoDestino.value,
	funcaoQualquer: function(){
		console.log('esse eh um jeito de evitar if e else if qdo se quer invocar funcao tb')
	}
}
formData['funcaoQualquer']()


function preencheDestino({valorOrigem, moedaTipoOrigem, moedaTipoDestino}){
	formMoeda.valorDestino.value = calculaMoeda(valorOrigem, moedaTipoOrigem, moedaTipoDestino)
	formData['valorDestino'] = 'teste'
	formData['valorDestino'] = calculaMoeda(valorOrigem, moedaTipoOrigem, moedaTipoDestino)
	console.log(formData)
}

/*
o listener de input é ouvido dentro do formulario para inputs,
selects etc.
*/
formMoeda.addEventListener('input', function(event){	
	formData[event.target.name] = event.target.value
	console.log(event)	
	preencheDestino(formData)		 	 	
	
})
preencheDestino(formData)

