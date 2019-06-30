
const {verify, createDatabase } = require('../db/dbIndex.js');

exports.verify = (req, res) => {
  verify(req.body.email, req.body.code, (result) => {
    console.log(req.body)
    res.send(result);
  })
};

exports.createDatabase = (req, res) => {

}