
const {verify, createDatabase } = require('../db/dbIndex.js');

exports.verify = (req, res) => {
  verify(req.body.email, req.body.code, (result) => {
    res.send(result);
  })
};

exports.createDatabase = (req, res) => {
  verify(req.body.gradeLevels, req.body.dbId, req.body.user, (result) => {
    res.send(result);
  })
}