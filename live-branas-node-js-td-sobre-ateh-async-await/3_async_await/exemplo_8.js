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
console.time("performance");
(async function(){
const a= await delayedSumRetornaCerto(2, 2)
const b= await delayedSumRetornaCerto(4, 4)
const result = await delayedSumRetornaCerto(a, b)
console.log(result);
console.timeEnd("performance");
}())
console.log('executa antes das promises')