import WebSocket from 'ws';
import readline from 'readline';

const hostname = '127.0.0.1';
const port = 3000;
const url = `ws://${hostname}:${port}`;

const ws = new WebSocket(url);

ws.on('open', () => {
  console.log('Connected to the WebSocket server');
  ws.send('Hello, Server!');
});

ws.on('message', (message) => {
  console.log(`Received from server: ${message}`);
});

ws.on('error', (error) => {
  console.error(`WebSocket error: ${error.message}`);
});

ws.on('close', () => {
  console.log('Disconnected from the WebSocket server');
});

// Setup readline interface for terminal input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  ws.send(input);
});