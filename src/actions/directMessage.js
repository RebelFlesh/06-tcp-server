'use strict';

const events = require('../lib/events');
const socketPool = require('../lib/socket-pool');

events.on('@dm',(user,targetUser,message) =>{
  console.log(socketPool);
  console.log({user,targetUser,message})
  socketPool.forEach((eachUser) => {
    if (eachUser.nickname == targetUser) {
      eachUser.socket.write(`<${user.nickname}> DM: ${message}`);
    }
  })
});