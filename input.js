let connection;
const handleUserInput = data => {
  switch (data) {
    case '\u0003':
      process.exit();
    case 'w':
      connection.write('Move: up');
      break;
    case 'd':
      connection.write('Move: right');
      break;
    case 's':
      connection.write('Move: down');
      break;
    case 'a':
      connection.write('Move: left');
      break;
  }
};
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
