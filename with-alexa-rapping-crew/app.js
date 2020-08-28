//init
var express =require('express'); 
var app = express();
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);
//config requests
app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname,'index.html'));
});
//config static resources
app.use('/commands',express.static(path.join(__dirname, 'commands')));
app.use('/karaoke',express.static(path.join(__dirname, 'node_modules/karaoke/src')));
app.use('/audio',express.static(path.join(__dirname, 'audio')));



//handle Alexa calls here
app.get('/beat', function(req,res){
    io.emit('arc.voicemessage', {cmd: 'beat',arg:null});
    res.sendStatus(200);
});

app.get('/play', function(req,res){
    io.emit('arc.voicemessage', {cmd: 'play',arg:null});
    res.sendStatus(200);
});

app.get('/stop', function(req,res){
    io.emit('arc.voicemessage', {cmd: 'stop',arg:null});
    res.sendStatus(200);
});
//
app.get('/voice-presentprevious', function(req,res){
    io.emit('presenter.voicemessage', {cmd: 'prev',arg:null});
    res.sendStatus(200);
});

//
app.get('/voice-presentbeginning', function(req,res){
    io.emit('presenter.voicemessage', {cmd: 'begin',arg:null});
    res.sendStatus(200);
});

app.get('/voice-presentjump', function(req,res){
    io.emit('presenter.voicemessage', {cmd: 'begin',arg:req.params['slideNo']});
    res.sendStatus(200);
});
//config socket.io
io.on('connection', function(socket){
  console.log('a user connected');
});

//start server
http.listen(8100, function () {
    console.log('listening on : 8100');
});
