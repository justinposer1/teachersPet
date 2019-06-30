
const pg = require("pg");
const fs = require('fs');
const query = fs.readFileSync('./server/db/schema.sql').toString();
const bcrypt = require('bcrypt');
const saltRounds = 10;

const db = {};

db.verify = (email, code, callback) => {
  let pool = new pg.Pool({
    user: "teacherspet",
    host: "127.0.0.1",
    database: "teacherspetdata",
    password: process.env.pgPassword,
    port: "5432"
  });

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
}

const createTables = (gradeLevels) => {

  const newPool = new pg.Pool({
      user: "teacherspet",
      host: "127.0.0.1",
      database: `${name}data`,
      password: process.env.pgPassword,
      port: "5432"
    });

    newPool.connect((err, client, release) => {
      if (err) {
        return console.error("Error acquiring client", err.stack);
      }
      client.query(query, (err, result) => {
    
        release();
        if (err) {
          return console.error("Error creating tables", err.stack);
        }
      });
    });
};

db.createDatabase = (name, gradeLevels, databaseId) => {
  let pool = new pg.Pool({
    user: "teacherspet",
    host: "127.0.0.1",
    database: "postgres",
    password: process.env.pgPassword,
    port: "5432"
  });
  
  pool.connect((err, client, release) => {
    if (err) {
      return console.error("Error acquiring client", err.stack);
    }
    client.query(`CREATE DATABASE ${databaseId}data`, (err, result) => {
  
      release();
      if (err) {
        return console.error("Error creating database", err.stack);
      } else {
          createTables(gradeLevels);
      }
    });
  });
}

module.exports = db;

db.createDatabase("Example School")