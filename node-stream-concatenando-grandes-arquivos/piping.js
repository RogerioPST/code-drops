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

//const filesDir = `${currentWorkDirectory}/dataset`

const output = `${currentWorkDirectory}/logger.log`

//console.time('concat-data')
//pega todos os arquivos, exceto o .zip
//const files = (await readdir(filesDir)).filter(item => !(!!~item.indexOf('.zip')))

const mapCommands = new Transform({
	transform(chunk, enc, cb) {
		const cmd = chunk.toString().trim()
		//if erro
		//cb(JSON.stringify({message, item}))
		if (!cmd) return cb()

		const at = new Date().toISOString()
		const item = `cmd: ${cmd}, at: ${at}, \n`

		cb(null, item)
	}
})

console.log('Write commands and then <CTRL> + C to show output')

process.stdin
	.pipe(mapCommands)
	.pipe(createWriteStream(output))