const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const dotenv= require("dotenv")
const app = express();
dotenv.config()
const port = process.env.port;
const hostname= process.env.hostname
const HomeRouter= require("./routes/home.router")
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
require("./configs/passport")(passport);
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use('/',HomeRouter);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
