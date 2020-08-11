# CONFIGURANDO ESLINT E PRETTIER NO VS CODE
- [x] colocar anotações
- [ ] colocar as confirurações como padrão no VS CODE 

## ANOTAÇÕES:
<ol>
<li>o arquivo index.js fica assim antes do eslint e prettier:

```javascript
const restify = require("restify");
const PORT = 5000
const app = restify.createServer()

app.get('/', (req, res) => 
  res.send({ hello: "World" }));

app.listen(PORT)
``` 
</li>
<li> criar manualmente o arquivo .eslintrc.json ou automaticamente com o comando:

```javascript
npx eslint --init
```
</li>
<li>
Responder as perguntas como sugerido a seguir:
<ol>
<li>How would you like to use ESLint?
Resposta: To check syntax, find problems, and enforce code style
</li>
<li>What type of modules does your project use?
Resposta: CommonJS (require/exports)
</li>
<li>What type of modules does your project use?
Resposta: CommonJS (require/exports)
</li>
<li>Does your project use TypeScript?
Resposta: No
</li>
<li>Where does your code run?
Resposta: Node
</li>
<li>How would you like to define a style for your project?
Resposta: Use a popular style guide
</li>
<li>Which style guide do you want to follow?
Resposta: AirBnb
</li>
<li>What format do you want your config file to be in?
Resposta: JSON
</li>
<li>Would you like to install them now with npm?
Resposta: Y
</li>
</ol>
</li>
<li>instalar e habilitar a extensão ESLint de Dirk Baeumer
v2.1.8 - Integrates ESLint JavaScript into VS Code.
</li>
</ol>
<h2>CONFIGURANDO o PRETTIER COM O ESLINT</h2>
<ol>
<li>
instalar e habilitar a extensão Prettier - Code formatter
da Prettier - v5.1.3 - Code formatter using prettier
</li>
<li>
instalar o plugin do ESLint para o PRETTIER se comunicar com o mesmo:

```javascript
npm i prettier eslint-config-prettier eslint-plugin-prettier
```

adicione prettier abaixo de 'airbnb-base' , crie a chave plugins e as 'rules', pois o arquivo .eslintrc.json deve ficar como abaixo:

```javascript
{
    "env": {
        "node": true,
        "commonjs": true,
        "es2020": true
    },
    "extends": [
				"airbnb-base",
				"prettier"
    ],
    "parserOptions": {
        "ecmaVersion": 11
    },
    "rules": {
    "prettier/prettier": "error"
  }
}
```
</li>
<li>
criar o arquivo settings.json dentro da pasta .vscode criada na raiz do projeto com o conteudo abaixo:

```javascript
{
  "editor.formatOnSave": true,
}
```
</li>
<li>para seguir regras como aspas simples ao invés de duplas, precisamos criar um arquivo na raiz do projeto com o nome de prettier.config.js e dentro dele terá um código que tem como objetivo sobreescrever o comportamento padrão do prettier.singleQuote que hoje é false para true:

```javascript
module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
};
```

</li>
<li>o arquivo index.js deve ficar assim após configurar o eslint e o prettier:

```javascript
const restify = require('restify');

const PORT = 5000;
const app = restify.createServer();
app.get('/', (req, res) => res.send({ hello: 'World' }));

app.listen(PORT);
```
</li>
</ol>






