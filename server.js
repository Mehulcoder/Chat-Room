var express = require("express");
var app = express();
var server = require('http').createServer(app);
var io  = require("socket.io").listen(server);
users = [];
connection = [];


server.listen(process.env.PORT || 3000);
console.log('Server is running....');

app.get('/', function (req, res) {  
    res.sendFile(__dirname+'/index.html');
});

io.sockets.on('connection', function (socket) {  
     
});