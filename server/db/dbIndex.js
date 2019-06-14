
const pg = require("pg");

const pool = new pg.Pool({
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
    client.query(`CREATE TABLE example(id SERIAL PRIMARY KEY, firstName VARCHAR(40) NOT NULL,lastName VARCHAR(40) NOT NULL)`, (err, result) => {
    
        
        if (err) {
          return console.error("Error executing query", err.stack);
        }
      });

    release();
    if (err) {
      return console.error("Error executing query", err.stack);
    }
  });
});


