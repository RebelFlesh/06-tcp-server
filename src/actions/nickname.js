'use strict';

const events = require('../lib/events');
const socketPool = require('../lib/socket-pool');

events.on('@nickname',(user,newName) =>{
  socketPool.forEach(eachUser => {
    eachUser.socket.write(`${user.nickname} changed their nickname to ${newName}\r\n`)
  })
  user.nickname = newName;
})
