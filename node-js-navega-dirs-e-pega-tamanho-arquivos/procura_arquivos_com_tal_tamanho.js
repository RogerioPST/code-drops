const fs = require('fs');

/* function getFilesizeInBytes(filename) {
	var stats = fs.statSync(filename);
	var fileSizeInBytes = stats.size;
	return fileSizeInBytes ;
	//return fileSizeInBytes / (1024*1024);
}

console.log(getFilesizeInBytes("procura_arquivos_com_tal_tamanho.js"))

fs.readdir('.', (err, files) => { 
	files.forEach(file => {     
		var stats = fs.statSync(file);		
		var fileSizeInKb = stats.size;    
		console.log('%s  --- %s  ', file, fileSizeInKb);  
	}); 
});


fs.readdir(".", (err, paths) => {
  console.log("path: ", paths)
}); */


function readdir(path){
	return new Promise((resolve, reject) => {
			fs.readdir(path, (err, paths) =>{
					if(err){
							reject(err)
					} else {
							resolve(paths)
					}
			}	)
		}).catch(error => { console.log("readdir-erro", error, "fim do readdir-erro")})
	}


function stat(path){
	return new Promise((resolve, reject) => {
			fs.stat(path, (err, stat) =>{
				if(err){
					reject(err)
				} else {
					resolve({path, stat })
				}
			})
	}).catch(error => { console.log("stat-erro", error, "fim do stat-erro")})
}


async function lista() {
  const paths = await readdir("../")
  const statsPromises = paths.map(async path => await stat(path))
  const stats = await Promise.all(statsPromises)
  const pathsWithIsFile = stats.map(path => ({
    path: path,
    //isFile: path.stat.isFile(),
  }))
  //const files = pathsWithIsFile.filter(path => path.isFile)
  console.log("caminhos: ", pathsWithIsFile, "fim dos caminhos")
}
lista()