require('dotenv').config();

const cookieParser = require('cookie-parser');
const express      = require('express');
const bodyParser   = require('body-parser');
const xmlparser    = require('express-xml-bodyparser');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const logger       = require('morgan');
const path         = require('path');
const cors         = require('cors')



const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

app.use(cors({
  credentials: true,
  origin: true
}))

// Middleware Setup
app.use(logger('dev'));
app.use(xmlparser());
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
app.locals.title = 'bdLACET backend';



const index = require('./routes/index');
app.use('/', index);


module.exports = app;
