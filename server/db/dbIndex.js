
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
    client.query(`SELECT activated FROM verificationcodes where  email='${email}' AND code='${code}';`, (err, result) => {
      
      release();
      if (err) {
        callback('connection error');
      } else {
        if (result.rows.length === 0) {
          callback('not found');
        } else {
          callback(result.rows[0].activated);
        }
      }
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

db.createDatabase = (name, gradeLevels) => {
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
    client.query(`CREATE DATABASE ${name}data`, (err, result) => {
  
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
