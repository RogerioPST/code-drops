const path = require("path");
const fs = require('fs');
const util = require('util');

const readdir = util.promisify(fs.readdir);

var myMap = new Map();

/*
objeto
chave - 1
valor: objeto {
	diretorio, filhos [], pai (numero), tamanhoDiretorioBytes
} */

async function encontra(caminho, contador) {	
	contador++;
	console.log("contador: " , contador)
	arquivos = [];
	tamanhoDiretorioBytes = 0	;
  let names;
  try {
    names = await readdir(caminho);
  } catch (erro) {
    console.log(erro);
  }
  if (names === undefined) {
    console.log('undefined');
  } else {
		for (const nome of names) {
			const caminhoTotalArquivo = path.join(caminho, nome);
			try {
        if (fs.lstatSync(caminhoTotalArquivo).isDirectory()) {					          
					let valueObj = {
						diretorio: caminho,
						filhos: arquivos,						
						tamanhoDir: tamanhoDiretorioBytes 
					}
					myMap.set(contador, valueObj);						
					
					await encontra(caminhoTotalArquivo, contador);
				} else {
					tamanhoDiretorioBytes = tamanhoDiretorioBytes + fs.lstatSync(caminhoTotalArquivo).size;
					arquivos.push(caminhoTotalArquivo);
          if (fs.lstatSync(caminhoTotalArquivo).size > 2000) { 
					}
				}
			}
			catch (err) {
				//vetor.push(err);
				//fs.writeSync( fdErro, err + os.EOL, null, 'utf8', function(){});
			///	fs.write( fdErro, err + os.EOL, null, 'utf8', function(){
				//	fs.close(fdErro, function(){
					 //console.log('file is updated');
				//	});
				// });
        //console.log("erro", err);
			}			
		}    
	}	
}


//encontra(__dirname, 0);

async function mostraValoresMap(){
	for (var [key, value] of myMap.entries()) {
		console.log(key + " = " + value.diretorio);
		console.log(key + " = " + value.filhos);
		console.log(key + " = " + value.tamanhoDir);
	}
}

(async function (){
	await encontra(__dirname, 0);
	await mostraValoresMap();		
}())