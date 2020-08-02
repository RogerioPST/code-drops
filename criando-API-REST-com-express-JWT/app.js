var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
/* esse midleware verifica se tem content type 'json' e prepara 
a resposta p 'json'
caso eu queira criar o meu middleware, crio com:
const meuMidlleware = (req, resp, next) =>{
	console.log('meu middleware')
	return next()
e coloco na rota
app.get('/rota', [meuMiddleware], (req, resp) =>{
	console.log('apos passar pelo meu middleware, chega aqui')
})
}
 */
app.use(express.json());
/* com a linha abaixo, vai ser criado um header
'Access-Control-Allow-Origin: '*' e  sem a linha abaixo, o 
server n aceita req de origens diferentes, pois o padrao do 
servidor eh negar.
o codigo "app.use(cors())" na pratica eh igual ao middleware 
abaixo:
"app.options('*', (req, res) =>{
	res.status(204)
	var origin = req.headers['Origin']
	res.setHeader('Access-Control-Allow-Origin', origin)
	res.setHeader('Access-Control-Allow-Origin', '*')
res.setHeader('Access-Control-Allow-Headers', 'GET,POST,PUT,DELETE,OPTIONS')
	res.send('')
}"
*/
app.use(cors())
/* n usa o charset extendido. ensina a ler o querystring.
transforma o %20 para espaço na querystring. vai criar um
obj req.query*/
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
