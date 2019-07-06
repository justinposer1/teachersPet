
const bcrypt = require("bcrypt");
const { createPool } = require("../utilityFunctions/utilityFunctions.js");

const db = {};

db.login = (code, email, password, callback) => {
  let pool = createPool(`teacherspet${code}`);
  let res = {};

  pool.connect((err, client, release) => {
    if (err) {
      res.message = "connection error";
      callback(res);
    } else {
      client.query(
        `SELECT id, hashedPassword FROM staff WHERE email='${email}';`,
        (err, result) => {
          if (err) {
            res.message = "connection error";
            callback(res);
          } else {
            if (result.rows.length === 0) {
              res.message = "not found";
              callback(res);
            } else {
              bcrypt.compare(
                password,
                result.rows[0].hashedpassword,
                (err, match) => {
                  if (err) {
                    res.message = err;
                  } else if (!match) {
                    res.message = "incorrect password";
                  } else {
                    res.success = true;
                  }
                  callback(res);
                }
              );
            }
          }
        }
      );
    }
    release();
  });
};

module.exports = db;
