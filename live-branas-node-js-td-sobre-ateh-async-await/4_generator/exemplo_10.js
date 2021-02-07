
//eh possivel parar uma funcao, marcando a funcao como generator. para isso, basta colocar o asterisco
function loop(){
	let i = 0;
	//bloqueio o event loop
	while(true){
		console.log(i++)
	}
}

loop()