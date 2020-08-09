<ul>
<li>o fetch retorna uma Promise que precisa ser resolvida
chamando o 'then'. uma promise como um readable stream, 
o q pode ser uma img, um json etc

```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
	.then((d) =>{
		const data = d.json()		
		return data
	})
``` 
</li>
<li>
coloca no console como tabela, se os tipos de dados de todas as linhas do retorno forem iguais

```javascript
console.table
```
</li>
<li>
sempre vou colocar um await em uma Promise p pegar o resultado que essa Promise fornece. Se eu fizer await em um dado q n é uma Promise, ele vai retornar uma Promise
</li>
<li>
há a possibilidade de transformar uma função em uma promise com async/await

```javascript
async function ola(){
	return await console.log('hello')
}
```
</li>
<li>
o await trava o código não executando a linha abaixo dele até q traga o resultado da função chamada, enquanto o 'then' deixa executar a linha abaixo dele. 
</li>
<li>
o await só deve ser usado caso a chamada posterior dependa do resultado da chamada desse await
</li>
<li>o Promise.all vai disparar todos as requests do array de promises ao mesmo tempo e o resultado vem na ordem

```javascript
const allPosts = await (Promise.all(posts))
console.log(allPosts)
//ou
	Promise.all(posts).then(console.log)
```
</li>
</ul>




