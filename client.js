const net = require('net');
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });
  conn.on('connect', () => {
    console.log('Connected to game server');
    conn.write('Name: JCP');
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};
module.exports = {
  connect,
};
