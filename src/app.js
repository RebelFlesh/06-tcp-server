'use strict';

const User = require('./models/user');
const events = require('./lib/events');
const {parser} = require('./lib/parser');
const socketPool = require('./lib/socket-pool');
const actions = require('./actions');

const net = require('net');
const server = net.createServer();

server.on('connection',function (socket) {
  const user = new User(socket);
  socketPool.adduser(user);
  socket.write(`Your user id is ${user.id}\r\n`);

  socket.line = '';
  socket.on('data', function (data) {
    console.log(data);
    socket.line+= data.toString();
    
    if (!socket.line.endsWith('\n')) 
      return;

    console.log(socket.line);
    parser(socket.line,(event,...args)=>{
      events.emit(event, user,...args);
    })
    socket.line = '';
  })
})

events.on('start',(portFromStartEvent)=>{
  console.log(`listening on port ${portFromStartEvent}!`);
})

exports.startServer = (PORT) => {
  server.listen(PORT, () =>{
    events.emit('start', PORT);
  })
};
