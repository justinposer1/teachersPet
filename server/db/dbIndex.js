
const pg = require('pg');

const pool = new pg.Pool({
    user: 'teacherspet',
    host: '127.0.0.1',
    database: 'teacherspetdata',
    password: process.env.pgPassword,
    port: '5432'
});

pool.query('CREATE TABLE users(id SERIAL PRIMARY KEY, firstName VARCHAR(40) NOT NULL,lastName VARCHAR(40) NOT NULL)', (err, res) => {
    console.log(err, res);
    pool.end();
});