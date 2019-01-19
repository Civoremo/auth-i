const server = require('./api/server.js');
const port = 3521;

server.listen(port, () => {console.log(`server port on ${port}`);})