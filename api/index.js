const createError = require("http-errors");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const usersRouter = require("./router/users.js");
const Todos = require("./router/Todo.js");
const SimpleCall = require("./router/SimpleCall.js");
const {dbDev} = require('../api/config/dbConnection')

const app = express();

app.use(express.json());

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use("/api/users", usersRouter);
app.use("/api/todo", Todos);
app.use("/api/test", SimpleCall);

// Handling Errors
app.use((err, req, res, next) => {
  // console.log(err);
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});


app.listen(3030, () => console.log("Server is running on port 3030"));

module.exports = app;
