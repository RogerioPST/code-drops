const delayedSumRetornaCerto = function(a,b){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
			resolve(a+b);
		}, 500)
	})
	
}

//para o event loop esperar os 2 segundos, resolvo a promise com o then p permitir o comportamento
//assincrono da linguagem
console.time('performance')
delayedSumRetornaCerto(2,2).then(function(a) {
	delayedSumRetornaCerto(4,4).then(function(b) {
		delayedSumRetornaCerto(a,b).then(function(result) {
			console.log(result);
			console.timeEnd('performance')
		})
	})
})