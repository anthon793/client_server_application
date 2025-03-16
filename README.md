# Client-Server Application

This project demonstrates a simple client-server application using TypeScript. The client connects to the server, sends a request, and logs the server's response.

## Project Structure

```
client-server-app
├── client
│   ├── index.ts        # Entry point for the client application
├── server
│   ├── index.ts        # Entry point for the server application
├── package.json         # npm configuration file
├── tsconfig.json        # TypeScript configuration file
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites

- Node.js
- npm
- TypeScript

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd client-server-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

1. Start the server:
   ```
   node server/index.js
   ```

2. In a separate terminal, start the client:
   ```
   node client/index.js
   ```

### Usage

Once both the server and client are running, the client will send a request to the server and log the response to the console.

## License

This project is licensed under the MIT License.