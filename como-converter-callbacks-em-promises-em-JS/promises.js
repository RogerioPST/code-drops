/**
 * deve criar arquivo se exite e adicionar texto
 * deve adicionar informações a arquivo existente se existir
 */
//exists foi deprecated e n deve ser usada
const { exists,appendFile, writeFile } = require('fs')
const { existsSync} = require('fs')
//promisify converte funcoes que ja trabalham com callbacks em
//promises
const {promisify} = require('util')
const writeFileAsync = promisify(writeFile)
const appendFileAsync = promisify(appendFile)

const readline = require('readline')
const terminal = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})



//precisa manter o 'this' do 'terminal', ignorando o contexto 
//atual do arquivo e mantem as variaveis que foram criadas
//de dentro da const 'terminal'
//question nao segue o padrao de callbacks (error, res)
//portanto, n eh possivel converter usando promisify
//const questionAsync = promisify(terminal.question.bind(terminal))

//simulando o que o promisify deve fazer, mas ignorando o 
//primeiro parametro, pois na convencao do callback o primeiro
//parametro seria o erro, mas no nosso caso do terminal 
//especifico eh o sucesso e erro nem capturamos mais.
//agora o primeiro parametro será considerado como sucesso!
const functionToPromise = (func, ...args) =>{
	return new Promise(resolve => func(...args, resolve))
}

const questionFunc = terminal.question.bind(terminal)
const questionAsync = msg => functionToPromise(questionFunc, `${msg}\n`)

;// p o compilador n achar q quero chamar a funcao da linha acima
//funcao auto chamada /clojure/IIF
(async function main(){
	try{
		//await writeFileAsync('./teste', 'testando!')
		//console.log('resposta', await questionAsync('qual eh seu nome?\n'))
		const fileName = await questionAsync('Qual é o arquivo que deseja trabalhar?')
		const text = await questionAsync('Escreva algo para incluir')
		const fileExists = existsSync(fileName)
		if (fileExists){
			await appendFileAsync(fileName, `\n${text}`)
			console.log(`${text} adicionado a ${fileName}`)
			return
		}
		
		await writeFileAsync(fileName, text)
	}catch(error){
		console.log('erro', error)
	} finally{
		console.log('processo finalizado')
		terminal.close()
	}

})()

/* 
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
 */