
const pg = require("pg");
const bcrypt = require('bcrypt');
const saltRounds = 10;

db.login = () => {
    let pool = createPool();
    let res = {};
  
    pool.connect((err, client, release) => {
      if (err) {
        res.message = 'connection error';
      } else {
        client.query(`SELECT id FROM staff where email='${email}' AND code='${code}';`, (err, result) => {
          
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
  }