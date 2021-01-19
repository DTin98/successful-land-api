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

app.use(logMiddleware);
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

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