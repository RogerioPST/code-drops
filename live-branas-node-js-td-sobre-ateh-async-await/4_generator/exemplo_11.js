//o async await vai fazer a resolucao de promises
const delayedSumRetornaCerto = function (a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
//aqui a gente acessa o pool de thread, pq no meio do fluxo de exec dessa funcao 
//delayedSum, ele estava fazendo um acesso a disco p fazer a leitura do arquivo .teste.txt
//entao, tirou a funcao abaixo p executar, daih retornou a soma e eventualmente depois 
//retornou a exec dessa funcao de leitura do arquivo			
/* 			fs.readFile('./teste.txt', 'utf-8',function (err,data){ //converte p utf-8
			//fs.readFile('./teste.txt', function (err,data){ //retorna bytes/buffer
				console.log(data);
			}) */
      resolve(a + b);
    }, 500);
  });
};

//para o event loop esperar os 2 segundos, resolvo a promise com o then p permitir o comportamento
//assincrono da linguagem
const async = function(fn){
	const generator = fn()
	asyncR(generator)
/* 	generator.next().value.then(function(result){
		console.log(result)
		generator.next().value.then(function(result){
			console.log(result)
		})
	}) */
}
const asyncR = function(gen, result){
	const obj = gen.next(result)
	if (obj.done) return
	obj.value.then(function(result){
		asyncR(gen, result)
	})
}
console.time("performance");
async(function*(){
//o yield permitiu parar a funcao e desocupou o event loop	
//qdo chama o next, ele volta p o event loop
	const a= yield delayedSumRetornaCerto(2, 2)
	const b= yield delayedSumRetornaCerto(4, 4)
	const result = yield delayedSumRetornaCerto(a, b)
	console.log(result);
	console.timeEnd("performance");
})
console.log('executa antes das promises')