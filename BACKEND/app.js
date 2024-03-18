var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var indexRouter = require('./routes/index');
var correoRouter = require('./routes/correo');
var serviciosRouter = require('./routes/servicios.r');
const habitacionesRouter = require('./routes/habitaciones.r');
const ofertasRouter = require('./routes/ofertas.r');
const reservasRouter = require('./routes/reservas.r');
const comentariosRouter = require('./routes/comentarios.r');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static')));

//base de datos
var db = require('./conexion/conexion');

app.use('/', indexRouter);
app.use('/correo', correoRouter);
app.use('/servicios', serviciosRouter);
app.use('/habitaciones', habitacionesRouter);
app.use('/ofertas', ofertasRouter);
app.use('/reservas', reservasRouter);
app.use('/comentarios', comentariosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

db();

module.exports = app;
