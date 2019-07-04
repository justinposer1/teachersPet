
const pg = require("pg");
const { createPool } = require('../utilityFunctions/utilityFunctions.js');

const db = {};

db.verify = (email, code, callback) => {
  let pool = createPool('teacherspetdata');
  let res = {};

  pool.connect((err, client, release) => {
    if (err) {
      res.message = 'connection error';
    } else {
      client.query(`SELECT id, activated FROM databases where email='${email}' AND code='${code}';`, (err, result) => {
        
        if (err) {
          res.message = 'connection error';
        } else {
          if (result.rows.length === 0) {
            res.message = 'not found';
          } else {
            // have to check this
            res.id = result.rows[0].id;
            res.activated = result.rows[0].activated;
          }
        }
      });
    }
    release();
    callback(res);
  })
};


module.exports = db;