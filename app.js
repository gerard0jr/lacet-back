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
const mysql = require('mysql')

let pool = mysql.createPool({
  connectionLimit : 100,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  multipleStatements: true
})



const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();
const router  = express.Router();

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
router.post('/searchNow', (req,res,next) => {
  console.log('searchnow')
  const { input } = req.body
  const sql = `SELECT * FROM registers WHERE title LIKE '%${input}%'`
  pool.query(sql, (err,rows) => {
    res.status(200).send(rows)
    console.log(rows)
  })
})
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname,'public', 'index.html'))
})


module.exports = app;
