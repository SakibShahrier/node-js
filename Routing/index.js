/*

*/

//dependencies
const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes');

// app object - module
const app = {};

//config

app.config = {
    port: 3000
};

app.createServer = () =>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () =>{
        console.log(`Listening to ${app.config.port}`);
    });
}

// handle Request Response

app.handleReqRes = handleReqRes;

//Start Server
app.createServer();