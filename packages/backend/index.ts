import http from 'http';

import app from './app';

const server = http.createServer(app);

const port = process.env.PORT || 3000;

server.on('error', (error: Error) => {
  console.error(error);
});
server.on('listening', () => {
  console.log(`server is listening port ${port}`);
});

server.listen(port);
