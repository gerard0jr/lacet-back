const mysql = require('mysql')

let handleDisconnect = () => {
  let pool = mysql.createPool({
    host: 'bdlacet.mx',
    port: 3306,
    database: 'algas',
    user: 'gerardo',
    password: 'bdlacet2019',
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