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
Pergunta 1:

How would you like to use ESLint? (Use arrow keys)

Como gostaria de usar o ESLint? (Use as teclas direcionais)

Resposta 1

To check syntax, find problems, and enforce code style

Checar sintaxe, buscar problemas e forçar os padrão de código

Pergunta 2:

What type of modules does your project use?

Que tipo de módulos seu projeto usa?

Respostas 2:

JavaScript modules (import/export)

CommonJS (require/exports) Selecione essa opção

None of these Nenhum desses

A resposta que vamos deixar selecionada aqui é o CommnsJS (require/exports), mas é muito comum nos projetos backend com JavaScript a galera usar o sucrase, se esse for o seu caso você deve selecionar a opção JavaScript modules (import/export)

Pergunta 3:

Which framework does your project use?

Qual framework seu projeto usa?

Resposta 3:

None of these

Nenhum desses

Pergunta 4:

Does your project use TypeScript?

Seu projeto usa TypeScript?

Resposta 4:
Escreva N e em seguida aperte a tecla ENTER

Pergunta 5:

Where does your code run? (Press <space> to select, <a> to toggle all, <i> to invert selection)

Onde seu projeto é executado? (Aperte <space> para selecionar, <a> para selecionar tudo, <i> para inverter a seleção)

Resposta 5:

Deixe apenas a opção Node selecionada.

Pergunta 6:

How would you like to define a style for your project?

Como você gostaria de definir um padrão de código para o seu projeto?

Resposta 6:

Use a popular style guide

Usar um padrão de código popular

Pergunta 7:

Which style guide do you want to follow?
_Qual padrão de código você quer seguir?_

Resposta 7:

Airbnb (https://github.com/airbnb/javascript)

Pergunta 8:

What format do you want your config file to be in?

Qual formato você deseja o seu arquivo de configuração?

Resposta 8:

JSON

Pergunta 9:

Would you like to install them now with npm?

Você gostaria de instalá-los agora com npm?

Resposta 9:

Y
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
</ol>






