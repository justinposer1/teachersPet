
const pg = require("pg");
const fs = require('fs');
const tableCreationQuery = fs.readFileSync('./server/db/schema.sql').toString();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { currentDate } = require('../utilityFunctions/utilityFunctions.js');

const db = {};

const createGradeLevelsQuery = (gradeLevels) => {
    let queryString = 'INSERT INTO gradeLevels (level) values ';
    gradeLevels.forEach(gradeLevel => {
      queryString += `(${gradeLevel}),`;
    });
    return queryString.slice(0, queryString.length - 1) + ';';
  };
  
  const createTables = (gradeLevels, user, databaseId, callback) => {
  
    const newPool = new pg.Pool({
        user: "teacherspet",
        host: "127.0.0.1",
        database: `teacherspet${databaseId}`,
        password: process.env.pgPassword,
        port: "5432"
      });
  
      var result = {};
      newPool.connect((err, client, release) => {
        if (err) {
          result.err = err;
          callback(result);
        } else {
          client.query(tableCreationQuery, (err) => {
            if (err) {
              result.err = err;
              callback(result);
            } else {
              let gradeQuery = createGradeLevelsQuery(gradeLevels);
              client.query(gradeQuery, (err) => {
                if (err) {
                  result.err = err;
                  callback(result);
                } else {
                  bcrypt.hash(user.password, saltRounds, (err, hashedPassword) => {
                    if (err) {
                      result.err = err;
                      callback(result);
                    } else {
                      let date = currentDate();
                      let name = user.name.split(' ').join('_')
                      client.query(`INSERT INTO staff (name, admin, email, hashedPassword, firstJoined) VALUES ('${name}', 'true', '${user.email}', '${hashedPassword}', '${date}')`, (err) => {
                        if (err) {
                          result.err = err;
                          callback(result);
                        } else {
                          result.success = true;
                          callback(result);
                        }
                      });
                    }
                  })
                }
              });
            }
          });
        }
        release();
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
        let query = `CREATE DATABASE teacherspet${databaseId}`;
        client.query(query, (err) => {
          
          if (err) {
            result.err = err;
            callback(result);
          } else {
            createTables(gradeLevels, user, databaseId, callback);
          }
          release();
        });
      }
    });
  };