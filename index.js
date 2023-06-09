const { Server } = require('ws');
const Whandler = require('whandler');

const whandler = Whandler();

const server = new Server({ port: 8080 });

server.on('connection', (socket) => {
    socket.on('message', (message) => {
        const { opcode } = JSON.parse(message);

        whandler.handle(opcode, { socket })
    })
});





