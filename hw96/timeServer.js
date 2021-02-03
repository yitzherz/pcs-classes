const net = require('net');

function pad(n) {return n < 10 ?  '0' + n : n;}
   
        
        
  
const server = net.createServer(socket => {

    const date = new Date();
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);

    const day = pad(date.getDate());
    let hour = pad(date.getHours());

    let minute = pad(date.getMinutes());
    
    socket.write(`${year}-${month}-${day} ${hour}:${minute}\n`);
    socket.end();
});
server.listen(+process.argv[2]);