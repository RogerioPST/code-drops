<ul>
<li>

```
npm init -y
```
</li>
<li>

```
npm i debug@4.1
```
</li>
<li> no package.json:
	<ul>
	<li>colocar o "type": "module" p usar import/export da nova versão do javascript
	</li>
	<li>colocar "start": "node --harmony-top-level-await index.js" p usar o await sem async</li>
	</ul>
</li>
<li>baixar os arquivos zip, realizar unzip.</li>
<li> ver qtas linhas tem: 

```
cat 2017.csv | wc -l
```
</li>
<li>independente da onde executar o arquivo index.js, quero q ele leia exatamente a pasta dataset e resolva o path correto rodando o comando

```
//de dentro da pasta ti
node --harmony-top-level-await concatenando-grandes-arquivos/
```
ou
```
//de dentro da pasta concatenando-grandes-arquivos
node --harmony-top-level-await index.js
```

```
//apelidando o pathname q vem dentro de import.meta.url para currentFile
const { pathname: currentFile} = new URL(import.meta.url)

const currentWorkDirectory = dirname(currentFile)

const filesDir = `${currentWorkDirectory}/dataset`

const output = `${currentWorkDirectory}/final.csv`

console.log(filesDir, '\n', output)
```
</li>
<li>
p aparecer o log do debug, colocar

```
"start": "DEBUG=app* node --harmony-top-level-await index.js",
```
</li>
<li> jogo a saida do comando no arquivo log.log

```
npm start | tee log.log
```
</li>
<li>
instalar o csv to json p converter o dado p json a medida eh lido

```
npm i csvtojson@2.0
```
</li>
<li>
cat final.csv | head -100
cat final.csv | tail -100
</li>
<li>

```
npm i json-to-csv-stream@1.1
```
</li>
<li>pacote para ler os dados de mais de uma fonte de dados

```
npm i stream-concat@0.3
```

</li>
</ul>