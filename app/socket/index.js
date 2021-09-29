const fs = require('fs');
const { getIdBySocket } = require('../service');
const service = require('../service');

module.exports = (server) => {
 
  const io = require('socket.io')(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      allowedHeaders: ["rtc-app-header"],
      credentials: true
    }
  });

  io.sockets.on('error', err => console.log(err));
  
  io.sockets.on("connection", socket => {
  
    console.log('a user connected')
    socket.on('login', user => {
      io.emit('login', service.login(user, socket));
      socket.emit('loadUsers', service.users);
    })

    socket.emit('status', 'hello');

    socket.on('downloadURL', req => {

      socket.to(req.user.ID).emit('downloadURL', video);
    })

    socket.on('broadcastURL', req => {
      socket.to(req.user.ID).emit('broadcastURL', req.video);
    })

    socket.on('delete', req => {
      fs.unlinkSync(`./videos/${req.Title}`);
    })

    socket.on('disconnect', () => {
      delete getIdBySocket[socket];
    })
  });

  return io;
}

