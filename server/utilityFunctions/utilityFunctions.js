
const utilities = {};

utilities.currentDate = () => {
    let today = new Date();
    let dd = String(today.getDate());
    let mm = String(today.getMonth() + 1);
    let yyyy = today.getFullYear();
    let current = mm + '/' + dd + '/' + yyyy;
    return current;
};

module.exports = utilities;