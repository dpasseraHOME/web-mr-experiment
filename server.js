var app = require('express')();
var http = require('http').Server(app);

/*var server = http.createServer(function(req, res) {
res.writeHead(200);
res.end('Hi everybody!');
});
server.listen(8080);*/

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/js/main.js', function(req, res) {
	res.sendFile(__dirname+'/js/main.js');
});

app.get('/stylesheets/screen.css', function(req, res) {
	res.sendFile(__dirname+'/stylesheets/screen.css');
});

http.listen(process.env.PORT || 8080, function() {
	console.log('listening on *:8080');
});