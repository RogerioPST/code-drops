var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ab?cd', (rq, r) => r.send("acd ou abcd"))
router.get('/ab+cd', (rq, r) => r.send("abcd ou abbbbbbbbcd"))
router.get('/ab*cd', (rq, r) => r.send("abcd ou abXXcd ou abQUALQUER_COISAcd"))
router.get('/ab(cd)?e', (rq, r) => r.send("abe ou abcde"))
router.get('/a/', (rq, r) => r.send("qualquer coisa com 'a' no nome"))
router.get('/.*fly$/', (rq, r) => r.send("qualquer coisa que termine com 'fly'"))



module.exports = router;
