
const pg = require("pg");
const fs = require('fs');
const query = fs.readFileSync('./server/db/schema.sql').toString();

db.verify = (code) => {

}

let pool = new pg.Pool({
  user: "teacherspet",
  host: "127.0.0.1",
  database: "postgres",
  password: process.env.pgPassword,
  port: "5432"
});

let name = "exampleschool";

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  client.query(`CREATE DATABASE ${name}data`, (err, result) => {

    release();
    if (err) {
      return console.error("Error creating database", err.stack);
    } else {
        createTables();
    }
  });
});

const createTables = () => {

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

module.exports = db;