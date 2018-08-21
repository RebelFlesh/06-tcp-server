'use strict';

exports.parser = function(line, emitCallback) {
  if(line.startsWith('@all')){
    return emitCallback('@all',line.substring(5));
  }
  if(line.startsWith('@list')){
    return emitCallback('@list',line.substring(6))
  }
  if(line.startsWith('@nickname')){
    return emitCallback('@nickname',line.substring(9));
  }
  if(line.startsWith('@dm')){
   return emitCallback('@dm',line.substring(3));
  }
  emitCallback('@help');
};
