var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){ //監聽
	socket.on('chatMessage', function(msg){
		console.log(msg);
		io.emit('chatMessage', msg);
	});
	console.log('a user connected');
});

http.listen(3000, function(){
	console.log('listening on port 3000');
});