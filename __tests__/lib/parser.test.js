'use strict';

const { parser } = require('../../src/lib/parser');

describe('parser', () => {
  describe('@dm', () =>{
    it('parses target nickname from line', done=>{
      var line = "@dm keith hello";

      parser(line, (event, target, message) =>{
        expect(event).toBe('@dm');
        expect(target).toBe('keith');
        expect(message).toBe('hello');
        done();
      });
    });

    it('emits @help if missing target', done =>{
      parser('@dm ', (event) =>{
        expect(event).toBe('@help');
        done();
      })
    });
  })

});
