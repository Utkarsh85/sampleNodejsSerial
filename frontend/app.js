var socket = io('http://localhost:3000'); //put in the address of the server running here

//CLIENT RECIEVING DATA FROM SERVER//
socket.on('SERVER_TO_CLIENT', function(msg){
	$('.data').text(msg);
});


//CLIENT SENDING DATA TO SERVER//
setInterval( function() {
	socket.emit('CLIENT_TO_SERVER', 'HI, I AM UTPAL, FROM CLIENT');

},1000);

//Mimics sending data to the server every 1 second.