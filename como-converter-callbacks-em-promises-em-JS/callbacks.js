/**
 * deve criar arquivo se exite e adicionar texto
 * deve adicionar informações a arquivo existente se existir
 */
const { exists,appendFile, writeFile } = require('fs')

const readline = require('readline')
const terminal = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

terminal.question('Qual é o arquivo que deseja trabalhar?\n', nomeDoArquivo =>{
	exists(nomeDoArquivo, (existe) => {
		if (existe){
			terminal.question('O arquivo já existe! Escreva algo para incluir\n', texto =>{
				if (!texto){
					console.log('o texto indicado é inválido! tente novamente')
					return
				}				
				appendFile(nomeDoArquivo, `${texto}\n`, (err) =>{
					if (err) {
						console.log('erro ao adicionar texto no arquivo')
						return
					}
					console.log('texto adicionado com sucesso')
					terminal.close()
				})

			})
		} else{
			terminal.question('O arquivo não existe! Escreva algo para incluir\n', texto => {
				if(!texto){
					console.log('o texto indicado é inválido! Tente novamente')
					return
				}
				writeFile(nomeDoArquivo, `${texto}\n`, (err) =>{
					if(err){
						console.log('erro ao adicionar texto no arquivo')
						return
					}

					console.log('texto adicionado com sucesso')
					terminal.close()

				})
			})
		}
	})
})
