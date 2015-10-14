var express = require('express');
var app = express();
var fs = require('fs');
var config = require('./js/config');
var io;
var server;

if (config.ws.secured) { // HTTPS
	var https = require('https');
	var options = {
		key: fs.readFileSync('server.key', 'utf8'),
		cert: fs.readFileSync('server.crt', 'utf8')
	};
	var securePort = config.ws.securePort;
	server = https.createServer(options, app).listen(securePort, function (err) {
		console.log('[+] Set [https] protocol and server running at port #' + securePort);
	});
} else { // HTTP
	var http = require('http');
	var port = config.ws.port;
	server = http.createServer(app).listen(port, function (err) {
		console.log('[+] Set [http] protocol and server running at port #' + port);
	});
}

io = require('socket.io')(server);

// usernames which are currently connected to the chat
var usernames = {};
var numUsers = 0;

io.on('connection', function (socket) {
  var addedUser = false;

  // when the client emits 'new message', this listens and executes
  socket.on('new message', function (data) {
    // we tell the client to execute 'new message'
    socket.broadcast.emit('new message', {
      username: socket.username,
      message: data
    });
  });

  // when the client emits 'add user', this listens and executes
  socket.on('add user', function (username) {
    // we store the username in the socket session for this client
    socket.username = username;
    // add the client's username to the global list
    usernames[username] = username;
    ++numUsers;
    addedUser = true;
    socket.emit('login', {
      numUsers: numUsers
    });
    // echo globally (all clients) that a person has connected
    socket.broadcast.emit('user joined', {
      username: socket.username,
      numUsers: numUsers
    });
  });

  // when the client emits 'typing', we broadcast it to others
  socket.on('typing', function () {
    socket.broadcast.emit('typing', {
      username: socket.username
    });
  });

  // when the client emits 'stop typing', we broadcast it to others
  socket.on('stop typing', function () {
    socket.broadcast.emit('stop typing', {
      username: socket.username
    });
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', function () {
    // remove the username from global usernames list
    if (addedUser) {
      delete usernames[socket.username];
      --numUsers;

      // echo globally that this client has left
      socket.broadcast.emit('user left', {
        username: socket.username,
        numUsers: numUsers
      });
    }
  });
});

// Handle resource request by server
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/chat.html');
});

app.get('/chat.html', function(req, res) {
	res.sendFile(__dirname + '/chat.html');
});

app.get('/main.js', function(req, res) {
	res.sendFile(__dirname + 'main.js');
});

app.get('/js/chat.js', function(req, res) {
	res.sendFile(__dirname + '/js/chat.js');
});

app.get('/style.css', function(req, res) {
	res.sendFile(__dirname + '/style.css');
});


app.use(express.static('.'));
