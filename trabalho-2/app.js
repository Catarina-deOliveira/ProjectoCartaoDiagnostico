var express = require('express');
var path = require('path');
var nodemailer = require('nodemailer');
var index = require('./routes/index');
var bodyParser = require('body-parser');


var mailer_server = require('./routes/mailer_server');
var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.xpto = "<u>HELLO</u>";
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
 
});

app.use('/mailer_server',mailer_server);
module.exports = app;