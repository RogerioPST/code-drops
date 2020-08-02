const log = require('debug')('api:main')
const app = require('express')()
const {sum} =require('./math')

app.use((req, resp, next) =>{
	log(req.query, `request at: ${new Date().toISOString()}`)
	return next()
})
app.get('/', (req, resp) =>{
	const num1 = Math.floor(Math.random() *100)
	const num2 = Math.floor(Math.random() *100)
	const result = sum(num1, num2)
	return resp.send(`${num1} + ${num2} is: ${result}`)
})


app.listen(3000, () => log('running at 3000'))