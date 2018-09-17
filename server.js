var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('jellow');
});

app.listen(3000, function() {
	console.log('Listening...')
})