var express = require('express');
var router = express.Router();


router.options('*', (req, res) =>{
	res.status(204)
	var origin = req.headers['Origin']
	//res.setHeader('Access-Control-Allow-Origin', origin)
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Headers', 'GET,POST,PUT,DELETE,OPTIONS')
	res.send('')
})

router.use(function timelog(req,res,next){
	console.log('middleware especifica - Time: ', Date.now())
	next()
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
