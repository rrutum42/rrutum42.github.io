var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));
app.use("/styles", express.static(__dirname+ '/css'));
app.use("/images", express.static(__dirname + '/img'));
app.use("/scripts", express.static(__dirname + '/js'));

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + 'index.html'));
});

// add other routes below
app.get('/aboutus', function (req, res) {
  res.sendFile(path.join(__dirname + 'aboutus.html'));
});

app.get('/contacttus', function (req, res) {
    res.sendFile(path.join(__dirname + 'contactus.html'));
  });

app.get('/sweet', function (req, res) {
    res.sendFile(path.join(__dirname + 'sweet.html'));
});

app.get('/savoury', function (req, res) {
    res.sendFile(path.join(__dirname + 'savoury.html'));
});

app.listen(process.env.PORT || 8080);