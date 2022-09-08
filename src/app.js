const express = require('express')
const app = express()
const server = require('http').createServer(app);
const { triggerEventInLoop } = require('./mock/index')
const io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }
});

app.get('/health_check', function (req, res) {
  res.send('Hello World')
})

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
server.listen(80, '0.0.0.0');


// trigger mock event
triggerEventInLoop()
