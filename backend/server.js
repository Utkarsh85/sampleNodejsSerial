// var config= require('./config.json');

// var SerialPort = require('serialport').SerialPort;
// var port = new SerialPort('/dev/ttyS0');
 
// port.on('open', function () {
//   port.on('data', function(data) {
//     console.log(data);
//   });
// });


///////////////////SERVER SETUP//////////////////////////////
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path= require('path');

http.listen(3000, function(){
	console.log('listening on *:3000');
});


////////////////SENDING MESSAGES///////////////////////////
setInterval( function() {

	var msg = Math.random();
	io.emit('SERVER_TO_CLIENT', msg);

}, 100);

//////////////////RECIEVING MESSAGES///////////////////////////
io.on('connection', function(socket){
	// console.log('a user connected');
	socket.on('CLIENT_TO_SERVER',function (msg) {
		console.log(msg);
	});
});