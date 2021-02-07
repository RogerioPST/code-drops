const delayedSumRetornaCerto = function(a,b,cb){
	setTimeout(function(){
		cb(a+b);
	}, 500)
}
//para o event loop esperar os 2 segundos, amarro as funcoes passando a funcao de callback para amarrar o comportamento
//assincrono da linguagem
console.time('performance')
delayedSumRetornaCerto(2,2, function(a) {
	delayedSumRetornaCerto(4,4, function(b) {
		delayedSumRetornaCerto(a,b, function(result) {
			console.log(result);
			console.timeEnd('performance')
		})
	})
})