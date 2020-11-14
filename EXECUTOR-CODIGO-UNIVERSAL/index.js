const { exec} = require('shelljs')

var version = exec('node --version', {silent: true}).stdout
var executor = exec('node -p "console.log(10+1)"', {silent: true}).stdout
var executorSemSilent = exec('node -p "console.log(10+1)"' ).stdout

const request = 'console.log(10+14)'
var codigoJS = exec(`node -p ${request}`, {silent: true}).stdout

const requestPython = 'print("Hello")';
var versaoPython = exec(`python --version`, {silent: true}).stdout
//var nova = requestPython.replace(/'/g, '')
//console.log('nova', nova)
const codigoPython = exec(`echo ${requestPython} > arquivo.py && python arquivo.py`, {silent: true})

const requestJava = 'class Arquivo {	public static void main( String []args ) {			System.out.println( "Hello World!" );	}}'
var versaoJava = exec(`java -version`, {silent: true})
//var nova = requestPython.replace(/'/g, '')
//console.log('nova', nova)
//exec(`echo ${requestJava} > arquivo.java && javac arquivo.java && java arquivo.class`, {silent: true})
const codigoJava = exec(`echo ${requestJava} > Arquivo.java && javac Arquivo.java && java Arquivo`, {silent: true})
//exec(`echo '${requestPython}' > arquivo.py`, {silent: true})
//var codigoPython = exec(`python arquivo.py`, {silent: true})

console.log(version)
console.log(versaoPython)
console.log(executor)
console.log(executorSemSilent)
console.log(codigoJS)
console.log(codigoPython.stdout)
console.log(codigoPython.stderr)
console.log('versao java', versaoJava.stderr)
console.log('versao java', versaoJava.stdout)
console.log(codigoJava.stdout)
console.log(codigoJava.stderr)