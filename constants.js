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
    msg: 'Say: Hungry snake',
  },
  j: {
    keybinding: 'j',
    msg: 'Say: Just snakin',
  },
  k: {
    keybinding: 'k',
    msg: 'Say: KK',
  },
  l: {
    keybinding: 'l',
    msg: 'Say: Let me have that one!',
  },
};

module.exports = {
  IP,
  PORT,
  movement,
  messages,
};
