<ul>
<li>
	para entender a diferença entre classes e funçoes, primeiro, vamos criar um objeto

```javascript
const Livro = {
	nome: 'React',
	editora: 'Casa do COdigo',
	paginas: 185,
	anunciar: function(){
		console.log(' a alura indica o livro' + this.nome)
	}
}

Livro.anunciar()
```
</li>
<li>
	
	ate o es6, tinha q fazer com função como construtora de obj.
o js eh baseado em Prototype

```javascript
const Livro2 = function(nome, editora, paginas){
	gNome = nome, 
	gEditora = editora,
	gPaginas = paginas

	this.getNome = function(){
		return gNome
	}
	this.getEditora = function(){		
		return gEditora
	}
	this.getPaginas = function(){
		return gPaginas
	}
}

const GraphQl = new Livro2('Graphql', 'Casa do Codigo', 123)

console.log('nome', GraphQl.getNome())
```
</li>
<li>
	
	por baixo dos panos, ao se criar uma constante string nome, o js faz isso:

```javascript
const nome = 'Alura'

const temp = new String(nome)
console.log(temp.toString())
```
</li>
<li>
classes tb sao funcoes no js - acucar sintatico.
classes n tem a propriedade de hoisting


```javascript
console.log(typeof classeLivro)
```
</li>
<li>a partir do es6, o js trouxe classes:


```javascript
class classeLivro{
	constructor(nome, editora, paginas){
		this.nome = nome
		this.editora = editora
		this.paginas = paginas
	}

	anunciar(){
		console.log('Titulo: ', this.nome)
	}

	descreverTitulo(){
		console.log('Descrever livro: ', this.nome)
	}
} 

const novoLivro = new classeLivro('Java', 'Casa do code', 123)

novoLivro.anunciar()
novoLivro.descreverTitulo()
```
</li>
</ul>