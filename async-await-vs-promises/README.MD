<ul>
<li>o fetch retorna uma Promise que precisa ser resolvida
chamando o 'then'. uma promise como um readable stream, 
o q pode ser uma img, um json etc
</li>

<li>
coloca no console como tabela, se os tipos de dados de todas as linhas do retorno forem iguais

```javascript
console.table
```
</li>

<li>
o jeito mais fácil de transformar uma função em uma promise é com async/await

```javascript
async function oh(){
	return await console.log('hello')
}
```
</li>



<li>
sempre vou colocar um await em uma Promise p pegar o resultado que essa Promise fornece. Se eu fizer await em um dado q n é uma Promise, ele vai retornar uma Promise
</li>
<li>
o await trava o código enquanto não trouxe o resultado da função chamada
</li>


</ul>




