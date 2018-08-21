'use strict';

exports.parser = function(line, emitCallback) {
  if(line.startsWith('@all')){
    return emitCallback('@all',line.substring(5));
  }
  if(line.startsWith('@list')){
    return emitCallback('@list',line.substring(6))
  }
  if(line.startsWith('@nickname ')){
    return emitCallback('@nickname',line.substring(10).trim());
  }
  if(line.startsWith('@dm ')){
    var spaceAfterName = line.indexOf(' ',4);
    if(spaceAfterName > 0){
      var target = line.substring(4,spaceAfterName);
      var message = line.substring(spaceAfterName + 1);
      return emitCallback('@dm', target, message);
  }
    return emitCallback('@help');
  }
  emitCallback('@help');
};
