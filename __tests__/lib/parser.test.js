'use strict';

const { parser } = require('../../src/lib/parser');

describe('parser', () => {
  describe('@dm', () => {
    it('parses target nickname and message from line', done => {
      var line = "@dm keith please eat less cheese\r\n";

      parser(line, (event, target, message) => {
        expect(event).toBe('@dm');
        expect(target).toBe('keith');
        expect(message).toBe('please eat less cheese\r\n');
        done();
      });
    });

    it('emits @help if missing target', () => {
      parser('@dm ', (event) => {
        expect(event).toBe('@help');
      });
    });

    it('emits @help if missing message', () => {
      parser('@dm ethan', (event) => {
        expect(event).toBe('@help');
      });
    });

    it('emits @help if missing message', () => {
      parser('@dm ethan         ', (event) => {
        expect(event).toBe('@help');
      });
    });
  });

  describe('@nickname', () => {
    it('does not match @nicknamesaredumb', () => {
      parser('@nicknamesaredumb whatever', (event) => {
        expect(event).toBe('@help');
      });
    });

    it('emits @nickname with trimmed new name', () => {
      parser('@nickname ethan\r\n', (event, newNickname) => {
        expect(event).toBe('@nickname');
        expect(newNickname).toBe('ethan');
      });
    });
  });
});
