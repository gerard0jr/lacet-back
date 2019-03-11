const express = require('express');
const router  = express.Router();
const parser = require('xml-js')
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

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});




router.post('/upload', (req,res,next) => {
  const drop = `DROP TABLE registers;`
  const create = 'CREATE TABLE registers (idregisters INT NOT NULL AUTO_INCREMENT, title LONGTEXT NULL, notes LONGTEXT NULL, custom1 LONGTEXT NULL, custom2 LONGTEXT NULL, custom3 LONGTEXT NULL, custom4 LONGTEXT NULL, custom5 LONGTEXT NULL, misc1 LONGTEXT NULL, misc2 LONGTEXT NULL, misc3 LONGTEXT NULL, PRIMARY KEY (idregisters), UNIQUE INDEX idregisters_UNIQUE (idregisters ASC));'
   pool.query(drop, (err,data) => {
      pool.query(create, (err,data) => {
        console.log(err) 
        console.log(data)
      })
   })

  const xml = req.body.data
  
  let json = parser.xml2js(xml, {compact: true, trim: true, ignoreAttributes: true, ignoreDeclaration: true})

  let registerFiltered = []
  let dataArray = []
  let custom1,custom2,custom3,custom4,custom5,misc1,misc2,misc3
  
  json.xml.records.record.map( item => {
    if(typeof item.titles === 'undefined') title = ''
    else title = `'${item.titles.title.style._text}'`
    if(typeof item.notes === 'undefined') notes = ''
    else notes = `'${item.notes.style._text}'`
    if(typeof item.custom1 === 'undefined') custom1 = ''
    else custom1 = `'${item.custom1.style._text}'`
    if(typeof item.custom2 === 'undefined') custom2 = ''
    else custom2 = `'${item.custom2.style._text}'`
    if(typeof item.custom3 === 'undefined') custom3 = ''
    else custom3 = `'${item.custom3.style._text}'`
    if(typeof item.custom4 === 'undefined') custom4 = ''
    else custom4 = `'${item.custom4.style._text}'`
    if(typeof item.custom5 === 'undefined') custom5 = ''
    else custom5 = `'${item.custom5.style._text}'`
    if(typeof item.misc1 === 'undefined') misc1 = ''
    else misc1 = `'${item.misc1.style._text}'`
    if(typeof item.misc2 === 'undefined') misc2 = ''
    else misc2 = `'${item.misc2.style._text}'`
    if(typeof item.misc3 === 'undefined') misc3 = ''
    else misc3 = `'${item.misc3.style._text}'`

    registerFiltered = [
      title,
      notes,
      custom1,
      custom2,
      custom3,
      custom4,
      custom5,
      misc1,
      misc2,
      misc3,
    ]

    dataArray = [...dataArray, registerFiltered]
   })

   const query = `INSERT INTO registers (title,notes,custom1,custom2,custom3,custom4,custom5,misc1,misc2,misc3) VALUES ?`
   pool.query(query, [dataArray], (err,data) => {
    console.log(err) 
    console.log(data)
    res.status(201).send(data)
   })
})

router.post('/searchNow', (req,res,next) => {
  const { input } = req.body
  const sql = `SELECT * FROM registers WHERE title LIKE '%${input}%'`
  pool.query(sql, (err,rows) => {
    res.status(200).send(rows)
    console.log(rows)
  })
})

router.get('/getAll', (req,res,next) => {
  const sql = `SELECT * FROM registers`
  pool.query(sql, (err,rows) => {
    res.status(200).send(rows)
    console.log(rows)
  })
})

module.exports = router;
