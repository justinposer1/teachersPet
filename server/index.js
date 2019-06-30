
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router/routes");
const path = require("path");
// const comp = require("compression");

const app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// app.use(comp());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../Client/dist/")));

app.use(router);

const port = process.env.PORT || 3000;

app.get('/test', (req, res) => {
    res.send('test successful')
})

app.listen(port, () => {
  console.log("teachersPet server active " + port);
});
