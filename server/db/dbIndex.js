
const pg = require("pg");
const fs = require('fs');
const query = fs.readFileSync('./server/db/schema.sql').toString();

const db = {};

db.verify = (code, email) => {
  let pool = new pg.Pool({
    user: "teacherspet",
    host: "127.0.0.1",
    database: "teacherspetdata",
    password: process.env.pgPassword,
    port: "5432"
  });

  pool.connect((err, client, release) => {
    if (err) {
      return console.error("Error acquiring client", err.stack);
    }
    client.query(`SELECT activated FROM verificationcodes where code='${code}' AND email='${email}';`, (err, result) => {
      
      release();
      if (err) {
        return console.error("Couldn't verify code", err.stack);
      } else {
        console.log(result.rows[0].activated);
      }
    });
  })
}

db.verify('xq3r7ta17l2mk9j0o23r', 'jposer1@gmail.com');

// let pool = new pg.Pool({
//   user: "teacherspet",
//   host: "127.0.0.1",
//   database: "postgres",
//   password: process.env.pgPassword,
//   port: "5432"
// });

// let name = "exampleschool";

// pool.connect((err, client, release) => {
//   if (err) {
//     return console.error("Error acquiring client", err.stack);
//   }
//   client.query(`CREATE DATABASE ${name}data`, (err, result) => {

//     release();
//     if (err) {
//       return console.error("Error creating database", err.stack);
//     } else {
//         createTables();
//     }
//   });
// });

// const createTables = () => {

//     const newPool = new pg.Pool({
//         user: "teacherspet",
//         host: "127.0.0.1",
//         database: `${name}data`,
//         password: process.env.pgPassword,
//         port: "5432"
//       });

//       newPool.connect((err, client, release) => {
//         if (err) {
//           return console.error("Error acquiring client", err.stack);
//         }
//         client.query(query, (err, result) => {
      
//           release();
//           if (err) {
//             return console.error("Error creating tables", err.stack);
//           }
//         });
//       });
// };

// module.exports = db;