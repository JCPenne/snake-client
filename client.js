const net = require('net');

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: 50541, // PORT number here,
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
