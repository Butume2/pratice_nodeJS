var express = require('express');
var app = express();
var router = express.Router();

router.get('/:id', function(req, res){
    res.send('Hello World!');
});

module.exports = router;