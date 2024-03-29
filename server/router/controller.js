
const { verify } = require('../db/metaDataFunctions.js');
const { createDatabase } = require('../db/createDB.js');
const { login } = require('../db/logins.js');


exports.verify = (req, res) => {
  verify(req.body.email, req.body.code, (result) => {
    res.send(result);
  })
};

exports.createDatabase = (req, res) => {
  
};

exports.login = (req, res) => {
  login(req.body.dbCode, req.body.email, req.body.password, (result) => {
    res.send(result);
  })
}