'use strict';

const events = require('../lib/events');
const socketPool = require('../lib/socket-pool');

events.on('@dm',(user,targetUser,message) =>{
  console.log(socketPool);
  console.log({user,targetUser,message})
});