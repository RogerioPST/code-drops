const numeros = [5,12,30,10,99,4]
/*
soma total
*/
valorInicial = 0
const soma = numeros.reduce(function(acumulador, valorAtual, indice, proprioArray){
	console.log(indice)
	console.log(proprioArray)
	return acumulador + valorAtual	
}, valorInicial)
console.log('soma', soma)
/*
calcular media
*/
const media = numeros.reduce(function(acumulador, valorAtual, indice, proprioArray){
acumulador += valorAtual
if (indice === proprioArray.length -1){
	return acumulador  / proprioArray.length
}
return acumulador
}, valorInicial)
console.log('media', media)

/*
fazendo o mesmo que map e filter
*/
let valorInicialMap = []
const valorMap =numeros.map(function(numero){
	return numero *2
})
console.log('valorMap', valorMap)

const reduceRepetindoMap =  numeros.reduce(function(acumulador, valorAtual){
	acumulador.push(valorAtual*2)
	return acumulador
}, valorInicialMap)
console.log('repetindo map com reduce', reduceRepetindoMap)
const reduceRepetindoMapSpreadOperator =  numeros.reduce(function(acumulador, valorAtual){	
	return [ ...acumulador, valorAtual * 2 ]
}, [])
console.log('repetindo map com reduce com spread operator', reduceRepetindoMapSpreadOperator)

const valorFilter = numeros.filter(function(numero){
	return numero % 2 ===0
})

console.log('valor com filter', valorFilter)

const valorRepetindoFilterComReduce = numeros.reduce(function(acumulador, valorAtual){	
	if (valorAtual % 2 === 0){
		acumulador.push(valorAtual)
	}
	return acumulador

}, [])
console.log('valor com reduce repetindo filter', valorRepetindoFilterComReduce)
/*
flatten
*/
const numerosDeNumeros = [[12,40], [10,5,3], [99,49,100], [10,20]]
const numerosCommap = numerosDeNumeros.map(function(valor){
	return valor
})
console.log('numeros c map', numerosCommap)
const numerosComFlatMap = numerosDeNumeros.flatMap(function(valor){
	return valor
})
console.log('numeros c flatmap', numerosComFlatMap)
const repetindoFlatmapComReduce = numerosDeNumeros.reduce(function(acumulador, valorAtual){
	return acumulador.concat(valorAtual)
},[])
console.log('repetindo flatmap c reduce', repetindoFlatmapComReduce)
const repetindoFlatmapComReduceComSpread = numerosDeNumeros.reduce(function(acumulador, valorAtual){
	return [...acumulador, ...valorAtual]
},[])
console.log('repetindo flatmap c reduce c spred', repetindoFlatmapComReduceComSpread)
/*
normalizar dados
*/
const usuarios = [
	{
		id: '001',
		nome: 'Rogerio', 
		idade: 28, 
		email: 'rogerio.pst1@gmail.com',
		foto: 'https://via.placeholder.com/300/200&id=1',
		sexo: 'M',
		estado: 'SP', 
	},
	{
		id: '002',
		nome: 'Rogeriop', 
		idade: 20, 
		email: 'rogerio.pst@gmail.com',
		foto: 'https://via.placeholder.com/300/200&id=1',
		sexo: 'M',
		estado: 'RJ', 
	},
	{
		id: '003',
		nome: 'Vanessa', 
		idade: 29, 
		email: 'van.pst1@gmail.com',
		foto: 'https://via.placeholder.com/300/200&id=1',
		sexo: 'F',
		estado: 'MS', 
	},
]
const usuariosNormalizados = usuarios.reduce(function(acumulador, valorAtual){
	acumulador[valorAtual.id] = valorAtual
	return acumulador
},{})
console.log('usuarios normalizados p melhorar performance de busca', usuariosNormalizados)
/*
agrupamentos
*/
const usuariosAgrupadosSexo = usuarios.reduce(function(acumulador, valorAtual){
	if (!acumulador[valorAtual.sexo]){
		acumulador[valorAtual.sexo] = []
	}
	acumulador[valorAtual.sexo].push(valorAtual)
	return acumulador
},{})

console.log('reduce p agrupamento', usuariosAgrupadosSexo)

const usuariosAgrupadosEstado = usuarios.reduce(function(acumulador, valorAtual){
	if (!acumulador[valorAtual.estado]){
		acumulador[valorAtual.estado] = []
	}
	acumulador[valorAtual.estado].push(valorAtual)
	return acumulador
},{})

console.log('reduce p agrupamento por estado', usuariosAgrupadosEstado)

function agrupaPor(objeto, chave){
	return objeto.reduce(function(acumulador, valorAtual){
		if (!acumulador[valorAtual[chave]]){
			acumulador[valorAtual[chave]] = []
		}
		acumulador[valorAtual[chave]].push(valorAtual)
		return acumulador
	},{})
}

const agrupadorPorSexoViaFuncao = agrupaPor(usuarios, 'sexo')
console.log('agrupadorPorSexoViaFuncao', agrupadorPorSexoViaFuncao)
const agrupadorPorEstadoViaFuncao = agrupaPor(usuarios, 'estado')
console.log('agrupadorPorEstadoViaFuncao', agrupadorPorEstadoViaFuncao)