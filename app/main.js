const net = require("node:net")

const server = net.createserver((connection)=> {
    connection.on("data",(buffer) => {

    })
})

server.listen(6379,"127.0.0.1")