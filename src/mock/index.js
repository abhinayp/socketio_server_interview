const { Manager } = require("socket.io-client");
const { eventInfo } = require('./data/index')

const SERVER_URL = 'ws://localhost:3000'

const manager = new Manager(SERVER_URL, {
  reconnectionDelayMax: 10000,
});

const mainSocket = manager.socket("/");

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms);
  })
}

const triggerEvent = async () => {
  for(const event of eventInfo) {
    mainSocket.emit(event.type, event.data);
    await sleep(2000)
  };
}

const triggerEventInLoop = async () => {
  while(true) {
    await triggerEvent()
  }
}

triggerEventInLoop()
