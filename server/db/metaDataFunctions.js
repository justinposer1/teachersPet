
const pg = require("pg");


const createPool = () => {
  return new pg.Pool({
    user: "teacherspet",
    host: "127.0.0.1",
    database: "teacherspetdata",
    password: process.env.pgPassword,
    port: "5432"
  });
};

const db = {};

db.verify = (email, code, callback) => {
  let pool = createPool();

  pool.connect((err, client, release) => {
    if (err) {
      callback('connection error');
    }
    client.query(`SELECT id, activated FROM verificationcodes where  email='${email}' AND code='${code}';`, (err, result) => {
      const res = {};
      release();
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
      callback(res);
    });
  })
};

db.login = 

module.exports = db;