
const utilities = {};

utilities.currentDate = () => {
    let today = new Date();
    let dd = String(today.getDate());
    let mm = String(today.getMonth() + 1);
    let yyyy = today.getFullYear();
    let current = mm + '/' + dd + '/' + yyyy;
    return current;
};

utilities.createPool = (database) => {
    return new pg.Pool({
      user: "teacherspet",
      host: process.env.dbHost || "127.0.0.1",
      database,
      password: process.env.pgPassword,
      port: "5432"
    });
  };

module.exports = utilities;