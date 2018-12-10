var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port =  process.env.PORT || 3000;

let Total = 0;
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  socket.on('item', function(msg){
      io.emit('item', msg);
  });
    socket.on('value', function(msg){
        Total += parseInt(msg);
        io.emit('value', msg);
        io.emit('total', Total);
    });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
