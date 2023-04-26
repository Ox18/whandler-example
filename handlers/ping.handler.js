module.exports = {
    opcodes: ["ping"],
    handler: async function ({
        socket
    }) {
        socket.send(JSON.stringify({
            opcode: "pong"
        }));
    }
}