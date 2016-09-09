var express = require('./config/express'),
    mongoose = require('./config/mongoose');

var db = mongoose();
var app = express();

//set port to run on
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
  console.log('The express server is running at localhost', app.get('port'));
});

module.exports = app;
