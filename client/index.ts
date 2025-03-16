import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const options = {
  hostname: hostname,
  port: port,
  path: '/',
  method: 'GET'
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(`Response from server: ${data}`);
  });
});

req.on('error', (error) => {
  console.error(`Problem with request: ${error.message}`);
});

req.end();