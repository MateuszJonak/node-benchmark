var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.status(204).send();
});

// setup server
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});
