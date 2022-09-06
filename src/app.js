const server = require('http').createServer();
const io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }
});
const { triggerEventInLoop } = require('./mock/index')

io.on('connection', client => {
  console.log('connected');
  client.on('event', data => { /* … */ });
  client.on('disconnect', () => { /* … */ });
  client.onAny((event, args) => {
    io.of('/').emit(event, args)
    console.log(`got ${event}`);
    console.log(JSON.stringify(args));
  });
});
server.listen(3000, '0.0.0.0');


// trigger mock event
triggerEventInLoop()
