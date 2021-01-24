const path = require("path");
const fs = require("fs");
var os = require("os");

const fdSucesso = fs.openSync('log_sucesso.txt', 'a')
const fdErro = fs.openSync('log_Erro.txt', 'a')

function encontra(caminho, contador) {  
  contador++;    //console.log("contador", contador)
	const directoryPath = caminho;  	

  fs.readdir(directoryPath, function (err, files) {    
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }    
    files.forEach(function (file) {
      const caminhoTotalArquivo = path.join(caminho, file);      
      try {
        if (fs.lstatSync(caminhoTotalArquivo).isDirectory()) {					
          //if (fs.path.stat.isFile(file)){
					//	console.log("[]:", caminhoTotalArquivo );					
          encontra(caminhoTotalArquivo, contador);
        } else {										
          if (fs.lstatSync(caminhoTotalArquivo).size > 2000) {            
						console.log("caminhoTotalArquivo", caminhoTotalArquivo)
						fs.write( fdSucesso, caminhoTotalArquivo + os.EOL, null, 'utf8', function(){
							fs.close(fdSucesso, function(){
							 //console.log('file is updated');
							});
						 });
						//fs.writeSync( fdSucesso, caminhoTotalArquivo + os.EOL, null, 'utf8', function(){});            
          }
        }
      } catch (err) {
				//vetor.push(err);
				//fs.writeSync( fdErro, err + os.EOL, null, 'utf8', function(){});
				fs.write( fdErro, err + os.EOL, null, 'utf8', function(){
					fs.close(fdErro, function(){
					 //console.log('file is updated');
					});
				 });
        //console.log("erro", err);
      }
    });
	});
	//console.log("cheguei aqui :", contador)
	//return vetor;
}

//console.log("dirname", __dirname);

//encontra('C:/Users/Rogerio', 0)
encontra(__dirname, 0)
//console.log("fdSucesso", fdSucesso)
console.log("fdErro", fdErro)

function mostraValoresMap(){
	for (var [key, value] of myMap.entries()) {
		console.log(key + " = " + value.diretorio);
		console.log(key + " = " + value.filhos);
		console.log(key + " = " + value.tamanhoDir);
	}
}

//encontra(__dirname, 0)

async function roda(){
	let novovetor = await encontra(__dirname, 0);
	await bufferiza(novovetor);
}
//roda()
function bufferiza(novovetor) {
  arquivoBuffer = novovetor.toString();

  fs.writeFile(
    path.join(__dirname, "arquivo.txt"),
    arquivoBuffer,
    function (erro) {
      //fs.writeFile( path.join(__dirname, "arquivo.txt"), arquivoBuffer function(erro) {
      if (erro) {
        throw erro;
      }
      console.log("Arquivo salvo");
    }
  );
}


//fs.writeSync( fdSucesso, "2text" + os.EOL, null, 'utf8', function(){});
/* fs.writeSync( fd, "3text" + os.EOL, null, 'utf8', function(){});
fs.writeSync( fd, "4text" + os.EOL, null, 'utf8', function(){});
fs.writeSync( fd, "5text" + os.EOL, null, 'utf8', function(){}); */

/* fs.write( fd, "text" + os.EOL, null, 'utf8', function(){	
 });  */

/* fs.closeSync(fdSucesso, function(){	});
fs.closeSync(fdErro, function(){	}); */
//fs.write( fd, "novo text" + os.EOL, null, 'utf8');


/* const idArquivo = function (){
	const idArq = fs.open('log.txt', 'a', 666, function( e, id ) {
		return id;
	})
	return idArq
}

console.log("idArquivo", idArquivo)


fs.write( idArquivo, "text" + os.EOL, null, 'utf8');
fs.write( idArquivo, "novo text" + os.EOL, null, 'utf8'); */

function processInput ( text ) 
{     
  fs.open('log.txt', 'a', 666, function( e, id ) {
		console.log("id", id)
   fs.write( id, text + os.EOL, null, 'utf8', function(){
    fs.close(id, function(){
     console.log('file is updated');
    });
   });
  });
 }

 //processInput("teste de frase");

 function processInpute ( text ) 
{     
  fs.open('H://log.txt', 'a', 666, function( e, id ) {
   fs.write( id, text + "\n", null, 'utf8', function(){
    fs.close(id, function(){
     console.log('file is updated');
    });
   });
  });
 }