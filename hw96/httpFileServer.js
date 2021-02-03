const http = require('http')
const fs = require('fs');
const server = http.createServer(function (req, res) {
    const readStream = fs.createReadStream(process.argv[3]);
    readStream.pipe(res);
});
server.listen(+process.argv[2]);