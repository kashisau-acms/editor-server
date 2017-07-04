var io = require('socket.io')(1337);

io.on('connection', (socket) => {
  console.log("New conection");

  socket.on('sync', () => {
    console.log("Syncing...");
  });

});