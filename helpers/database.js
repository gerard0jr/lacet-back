const mysql = require('mysql')

let handleDisconnect = () => {
  let pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    multipleStatements: true
  })

  let connection = pool.getConnection(function(err, connection) {
    if (err) {
      console.error('Error connecting: ' + err.stack);
      setTimeout(handleDisconnect, 2000)
      return;
    }
    console.log('Connected as thread id: ' + connection.threadId);
    return connection
  })

  pool.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  })

  module.exports = connection;
}

handleDisconnect()