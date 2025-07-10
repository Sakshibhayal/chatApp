import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';

console.log('Starting chat server...');
const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

const visitors = [
  { id: 'v1', name: 'Alice', email: 'alice@test.com' },
  { id: 'v2', name: 'Bob', email: 'bob@test.com' }
];
let toggle = true;
io.on('connection', (socket) => {
  console.log('Agent connected');

  let index = 0;
  const visitorInterval = setInterval(() => {
    if (index < visitors.length) {
      socket.emit('new-visitor', visitors[index]);
      console.log(`New visitor sent: ${visitors[index].name}`);
      index++;
    }
  }, 10000);

  const messageInterval = setInterval(() => {
    const visitor = toggle?visitors[0]:visitors[1];
    toggle = !toggle;
    const msg = {
      id: Date.now(),
      visitorId: visitor.id,
      content: `Hello from ${visitor.name}!`,
      sender: 'visitor',
      timestamp: new Date().toISOString(),
    };
    socket.emit('new-message', msg);
    console.log(`New message sent: ${msg.content}`);
  }, 5000);

  socket.on('disconnect', () => {
    clearInterval(visitorInterval);
    clearInterval(messageInterval);
    console.log('Agent disconnected');
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Socket.IO server running on port ${PORT}`);
});
