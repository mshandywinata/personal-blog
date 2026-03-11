const path = require("path");
const express = require("express");

const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");
const basicAuth = require("./middlewares/auth");

const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

const viewPath = path.join(__dirname, "views/pages");

app.set("view engine", "ejs");
app.set("views", viewPath);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(logger);
app.use(basicAuth);

app.use("/admin", adminRoutes);
app.use("/", userRoutes);

app.use(errorHandler);

module.exports = app;