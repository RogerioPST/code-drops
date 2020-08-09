# DESTRUCTURING EM JAVASCRIPT
- [x] colocar anotações
- [ ]  verificar se tem mais exemplos

## ANOTAÇÕES:
<ul>
<li>fazendo o destructuring p espalhar os valores em um único array vs dividindo em dois vetores:

```javascript
const numerosPares = [2,4,6]
const numerosImpares = [1,3,5]

const numeros = [numerosPares, numerosImpares]
console.log(numeros)	
const numerosComDestructuring = [...numerosPares, ...numerosImpares]
console.log(numerosComDestructuring)
``` 
</li>
<li>
espalhando os demais valores q vem no vetor em uma outra variavel:

```javascript
const [n1, n2, ...outrosNumeros] = [1,2,3,4,5,6]
console.log(n1, n2, outrosNumeros)
```
</li>
<li>
qdo tem valor padrão sobreposto ou não:

```javascript
const [nome1 ='Valor padrão'] = ['Valor sobreposto']
console.log('exibe valor sobreposto: ', nome1)
const [nome2 ='Valor padrão'] = []
console.log('exibe valor padrão: ', nome2)
```
</li>
<li>
qdo queremos espalhar os valores do objeto p um novo unico objeto ou separado:

```javascript
const pessoa ={
	nome: 'Rogerio',
	idade: 37,
	time: 'Santos',
	esposa: 'Vanessa'
}
const pessoaComTelefone = {...pessoa, telefone: '119852'}
const objpessoa_e_objTelefone_separados = {pessoa, telefone: '119852'}
console.log(pessoa)
console.log(pessoaComTelefone)
console.log(objpessoa_e_objTelefone_separados)
```
</li>
<li>
qdo queremos atribuir os valores dos atributos do objeto pessoa p constantes:

```javascript
	const {nome } = pessoa
	const {idade } = pessoa
	const {time, esposa } = pessoa

	console.log(nome)
	console.log(idade)
	console.log(time, esposa)
```
</li>
<li>qdo queremos passar p a funcao apenas alguns valores e n o obj todo:

```javascript
	function imprimeDados ({ nome, idade}){
		console.log('log dentro da funcao', nome, idade)
	}

	imprimeDados(pessoa)
```
</li>
</ul>




