
const {verify, createDatabase } = require('../db/dbIndex.js');

exports.verify = (req, res) => {
  Movie.where({})
    .fetchAll()
    .then(found => {
      if (!found) {
        console.log("could not find");
      } else {
        res.send(found.models);
      }
    });
};

exports.createDatabase = (req, res) => {

}