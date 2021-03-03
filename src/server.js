const express = require("express");
const bodyParser = require("body-parser");
const chalk = require("chalk");
const cors = require("cors");
const config = require("config");
const app = express();
const pack = require("../package");
const mongoose = require("mongoose");
const path = require("path");
const compression = require("compression"); //gzip
const logMiddleware = require("./middlewares/logMiddleware");
const multer = require("multer");
const upload = multer();
const fs = require("fs");
const https = require("https");

const privateKey = fs.readFileSync("./.cert/cert.key", "utf8");
const certificate = fs.readFileSync("./.cert/cert.crt", "utf8");

//Serve apiDoc
app.use(express.static("public"));
app.get("/apidoc", (req, res) => {
  res.sendFile(__dirname + "/../public/index.html");
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With, X-Api-Key"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  if ("OPTIONS" === req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});
app.use(upload.none());
app.use(logMiddleware);
app.use(cors());
app.use(bodyParser.json());

app.use(require("express-status-monitor")());

require("./routes")(app);
const dir = path.join(__dirname, "assets");
app.use("/upload", express.static(dir));

app.use(haltOnTimedout);
function haltOnTimedout(req, res, next) {
  if (!req.timedout) next();
}

// mode can be access anywhre in the project
mode = process.env.NODE_ENV;

const start = () =>
  app.listen(config.get(`${mode}.port`), () => {
    console.log(chalk.yellow(".......................................")); //eslint-disable-line
    console.log(chalk.green(config.get(`${mode}.name`))); //eslint-disable-line
    console.log(chalk.green(`Port:\t\t${config.get(`${mode}.port`)}`)); //eslint-disable-line
    console.log(chalk.green(`Mode:\t\t${config.get(`${mode}.mode`)}`)); //eslint-disable-line
    console.log(chalk.green(`App version:\t${pack.version}`)); //eslint-disable-line
    console.log(chalk.green("database connection is established"));
    console.log(chalk.yellow(".......................................")); //eslint-disable-line
  });
//serve https
const credentials = { key: privateKey, cert: certificate };
const httpsServer = https.createServer(credentials, app);
httpsServer.listen(8443);

dbConnection = () => {
  // When you try to connect database please comment bellow start method
  // start();

  // MONGO database connection start
  const databaseConfig = config.get(`${mode}.database`);
  mongoose.connect(
    `mongodb+srv://${databaseConfig.username}:${databaseConfig.password}@${databaseConfig.host}/${databaseConfig.database}`,
    {
      useNewUrlParser: "true",
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,
    }
  );
  mongoose.connection.on("error", (err) => {
    console.log("err", err);
  });
  mongoose.connection.on("connected", (err, res) => {
    start();
  });
};

dbConnection();

var dirname = __dirname;
module.exports = {
  dir: dirname,
};
