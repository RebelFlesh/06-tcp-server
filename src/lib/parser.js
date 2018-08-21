'use strict';

exports.parser = function(line, emitCallback) {
  if(line.startsWith('@all')){
    return emitCallback('@all',line.substring(5));
  }
  if(line.startsWith('@list')){
    return emitCallback('@list',line.substring(6))
  }
  //  emit @dm with [name, message]
  //if line starts with @nick <name>,
  //  emit @nick with [name]
  emitCallback('@help');
};
