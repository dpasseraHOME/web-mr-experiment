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

http.listen(process.env.PORT || 3000, function() {
	console.log('listening on *:3000');
});