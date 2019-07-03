
const pg = require("pg");
const fs = require('fs');
const query = fs.readFileSync('./server/db/schema.sql').toString();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { currentDate } = require('..utilityFunctions/utilityFunctions.js');

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
};

const createGradeLevelsQuery = (gradeLevels) => {
  let queryString = 'INSERT INTO gradeLevels (level) values';
  gradeLevels.forEach(gradeLevel => {
    queryString += `(${gradeLevel})`;
  });
  return queryString + ';';
};

const createTables = (gradeLevels, user, callback) => {

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
    
        
        if (err) {
          return console.error("Error creating tables", err.stack);
        } else {
          let gradeQuery = createGradeLevelsQuery(gradeLevels);
          client.query(gradeQuery, (err, result) => {
    
        
            if (err) {
              return console.error("Error creating tables", err.stack);
            } else {
              bcrypt.hash(user.password, saltRounds, (err, hashedPassword) => {
                
                client.query(`INSERT INTO staff (name, admin, email, hashedPassword, firstJoined) VALUES (${user.name}, 'true', ${user.email}, ${hashedPassword}, ${Date})`, (err, result) => {
      
          
                  if (err) {
                    
                  } else {
                    
                  }
                });

              })
            }
          });
        }
        release();
      });
    });
};

db.createDatabase = (gradeLevels, databaseId, user, callback) => {
  let pool = new pg.Pool({
    user: "teacherspet",
    host: "127.0.0.1",
    database: "postgres",
    password: process.env.pgPassword,
    port: "5432"
  });
  
  pool.connect((err, client, release) => {
    var result = {};
    if (err) {
      result.err = err;
      callback(result);
    } else {
      client.query(`CREATE DATABASE ${databaseId}data`, (result) => {
    
        release();
        if (err) {
          result.err = err;
          callback(err);
        } else {
            createTables(gradeLevels, user, callback);
        }
      });
    }
  });
};

module.exports = db;