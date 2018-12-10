var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port =  process.env.PORT || 3000;

const Total = 0;
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  socket.on('item', function(msg){
      total += parseInt(total);
      io.emit('item', msg);
      io.emit('total', total)
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
