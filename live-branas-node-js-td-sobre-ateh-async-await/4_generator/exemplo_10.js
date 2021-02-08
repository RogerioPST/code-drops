
//eh possivel parar uma funcao, marcando a funcao como generator. para isso, basta colocar o asterisco
const loop = function* (){
	let i = 0;
	//bloqueio o event loop
//nesse caso, o done do generator nunca vai acontecer, mas poderia acontecer se n fosse while(true)	
	while(true){
		//console.log(i++)
	//para um pouco aqui e retoma	
		//yield
		yield i++
		//posso carregar arquivos infinitos de 10 em 10 linhas, por ex, fazendo yield
	}
}

//qdo eu chamar uma funcao q esta marcada c asterisco, eu n estou chamando a funcao, 
//eu estou pegando o controle remoto da funcao
//o generator dah a possibilidade de colocar um ponto de parada em uma funcao
const generator = loop()
console.log(generator)
//o generator.next() vai executar o laço; vai ateh o yield
generator.next()
//outro next(), vai ir no while  e ir ateh o yield
generator.next()
generator.next()
generator.next()
generator.next()
//generator.next()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())