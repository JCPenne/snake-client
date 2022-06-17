const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * establishes a connection with the game server
 * @returns { object }
 */
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.on('connect', () => {
    console.log('Connected to game server');
    conn.write('Name: JCP');
  });
  conn.on('data', data => {
    console.log(data);
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  return conn;
};
module.exports = {
  connect,
};
