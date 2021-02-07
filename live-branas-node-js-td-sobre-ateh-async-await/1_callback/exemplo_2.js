const delayedSumRetornaUndefined = function(a,b){
	setTimeout(function(){
		return a+b;
	}, 2000)
}

const resultComErro = delayedSumRetornaUndefined(2,2)

console.log(resultComErro)

const delayedSumRetornaCerto = function(a,b,cb){
	setTimeout(function(){
		cb(a+b);
	}, 2000)
}

//para o event loop esperar os 2 segundos, amarro as funcoes passando a funcao de callback para amarrar o comportamento
//assincrono da linguagem
delayedSumRetornaCerto(2,2, function(resultSemErro) {
	console.log(resultSemErro)
})
