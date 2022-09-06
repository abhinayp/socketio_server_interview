const server = require('http').createServer();
const io = require('socket.io')(server);
const { triggerEventInLoop } = require('./mock/index')

io.on('connection', client => {
  console.log('connected');
  client.on('event', data => { /* … */ });
  client.on('disconnect', () => { /* … */ });
  client.onAny((event, args) => {
    console.log(`got ${event}`);
    console.log(JSON.stringify(args));
  });
});
server.listen(3000);


// trigger mock event
triggerEventInLoop()
