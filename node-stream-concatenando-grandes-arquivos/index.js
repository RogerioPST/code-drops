//console.log(await Promise.resolve(true))
import { dirname, join} from 'path'

import {promisify} from 'util'

//leio pedaços/chunks do arquivo - createReadStream
import { promises, createReadStream, createWriteStream} from 'fs'
import {pipeline, Transform} from 'stream'

//converte de callback p promises
const pipelineAsync = promisify(pipeline)

import csvtojson from 'csvtojson'
import jsontocsv from 'json-to-csv-stream'

import StreamConcat from 'stream-concat'

//p ler todos os arquivos de dentro desse diretorio
const {readdir} = promises

import debug from 'debug'

const log = debug('app:concat')

//independente da onde executar o arquivo index.js, quero q ele leia exatamente a pasta dataset e resolva o path correto
//apelidando o pathname q vem dentro de import.meta.url para currentFile
const { pathname: currentFile} = new URL(import.meta.url)

const currentWorkDirectory = dirname(currentFile)

const filesDir = `${currentWorkDirectory}/dataset`

const output = `${currentWorkDirectory}/final.csv`

console.time('concat-data')
//pega todos os arquivos, exceto o .zip
const files = (await readdir(filesDir)).filter(item => !(!!~item.indexOf('.zip')))

log(`processing ${files} `)

const ONE_SECOND = 1000

//de um em um segundo, vai colocar um ponto na tela
//unref() - qdo todas os outros processos assincronos terminarem, vai terminar o setInterval tb
setInterval(() => process.stdout.write('.'), ONE_SECOND).unref()
//setTimeout(() => console.log('ae! vai ter dois pontinhos pq tem 2000 ao lado'), 2000)

//le somente um arquivo
//const combinedStreams = createReadStream(join(filesDir, files[0]))
const streams = files.map(
	item => createReadStream(join(filesDir, item))
)
const combinedStreams = new StreamConcat(streams)
const finalStream = createWriteStream(output)

//p cada linha do csv, vai cair no transform e vamos extrair apenas o q queremos
const handleStream = new Transform({
	transform: (chunk, encoding, funcaoCallback) => {
		const data = JSON.parse(chunk)
		//const output = chunk
		const output ={
			//pegando as colunas do arquivo
			id: data.Respondent,
			country: data.Country
		}
		//log(`id: ${output.id}`)
		return funcaoCallback(null, JSON.stringify(output))
		//toString pq o arquivo no final eh um buffer
		//console.log('output', output.toString())
	}
})

await pipelineAsync(
	combinedStreams,
	csvtojson(),
	handleStream,
	jsontocsv(),
	finalStream
)

log(`${files.length} files merged! on ${output}`)
console.timeEnd('concat-data')