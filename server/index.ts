import http from 'http';
import WebSocket from 'ws';
import winston from 'winston';

const hostname = '127.0.0.1';
const port = 3000;

// Create HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Client!\n');
});

// Create WebSocket server
const wss = new WebSocket.Server({ server });

// Configure winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'server.log' })
  ]
});

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const messageStr = message.toString();
    logger.info(`Received message: ${messageStr}`);
    
    // Send a default response back to the client
    ws.send(`Server received: ${messageStr}`);
    
    // Additional default responses
    if (messageStr === 'Hello, Server!') {
      ws.send('Hello, Client!');
    } else if (messageStr === 'How are you?') {
      ws.send('I am fine, thank you!');
    } else {
      ws.send('Default response: Message received.');
    }
  });

  ws.send('Welcome to the WebSocket server!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});