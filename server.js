var express = require('express');
var app = express();
var server;

var allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Range');
    next();
}

app.use(allowCrossDomain);
app.use(express.static(__dirname + '/public'));

app.configure('development', function () {
    app.use(express.errorHandler({ dumpExceptions:true, showStack:true }));
    server = app.listen(13337);
});

app.configure('production', function () {
    server = app.listen(8000); //nodejitsu will map this to 80
});