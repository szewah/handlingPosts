const port = 3000;

var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	path = require('path');

// implement bodyParser.json middlewear
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// tell express that www is the root of our pubilc web folder
app.use(express.static(path.join(__dirname, 'www')));
// tell express what to do when the /form ruote is requested
app.post('/form', function(req,res){
// http://www.java2s.com/Tutorials/Javascript/Node.js_Tutorial/1810__Node.js_HTTP_Headers.htm
	res.setHeader('Content-Type', 'application/json');
	setTimeout(function(){
		res.send(JSON.stringify({
			firstName: req.body.firstName || null,
			lastName: req.body.lastName || null 
		}));
	}, 1000)
	console.log('You posted: First Name: ' + req.body.firstName + ', Last Name: ' + req.body.lastName);
});

app.listen(port, function(){
	console.log('Server is running. Point your browser to http://localhost:3000')
});






