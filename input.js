let connection;
const { movement, messages } = require('./constants');
/**
 * Called on events to read user input
 * @param { ReadableStream } data 
 */
const handleUserInput = data => {
  switch (data) {
    case movement.up.keybinding:
      connection.write(movement.up.msgToSrvr);
      break;
    case movement.left.keybinding:
      connection.write(movement.left.msgToSrvr);
      break;
    case movement.down.keybinding:
      connection.write(movement.down.msgToSrvr);
      break;
    case movement.right.keybinding:
      connection.write(movement.right.msgToSrvr);
      break;
    case messages.h.keybinding:
      connection.write(messages.h.msg);
      break;
    case messages.j.keybinding:
      connection.write(messages.j.msg);
      break;
    case messages.k.keybinding:
      connection.write(messages.k.msg);
      break;
    case messages.l.keybinding:
      connection.write(messages.l.msg);
      break;
      //Exit case for when Ctrl-c is pressed
    case '\u0003':
      process.exit();
  }
};
/**
 * Reads user input
 * @param { Object } conn 
 * @returns Readable stream of user input
 */
const setupInput = conn => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};
module.exports = {
  setupInput,
};
