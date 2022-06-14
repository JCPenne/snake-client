const IP = 'localhost';
const PORT = 50541;
const movement = {
  up: {
    keybinding: 'w',
    msgToSrvr: 'Move: up',
  },
  left: {
    keybinding: 'a',
    msgToSrvr: 'Move: left',
  },
  down: {
    keybinding: 's',
    msgToSrvr: 'Move: down',
  },
  right: {
    keybinding: 'd',
    msgToSrvr: 'Move: right',
  },
};
const messages = {
  h: {
    keybinding: 'h',
    msg: 'Say: How bout no..',
  },
  j: {
    keybinding: 'j',
    msg: 'Say: jkkkkkk',
  },
  k: {
    keybinding: 'k',
    msg: 'Say: kool beans',
  },
  l: {
    keybinding: 'l',
    msg: 'Say: LESGO',
  },
};

module.exports = {
  IP,
  PORT,
  movement,
  messages,
};
