// section 7 lecture 19 needs to be start

var express = require("express");
var bodyParser = require("body-parser");

var { mongoose } = require("./db/mongoose");
var { Todo } = require("./models/todo");
var { User } = require("./models/user");

var app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then(
    doc => {
      res.send(doc);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

app.post("/users", (req, res) => {
  var user = new User({
    text: req.body.text
  });
  user.save().then(
    doc => {
      res.send(doc);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

app.get("/users", (req, res) => {
  User.find().then(
    user => {
      res.send({ user });
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get("/todos", (req, res) => {
  Todo.find().then(
    todo => {
      res.send({ todo });
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.listen(3001, () => {
  console.log("Started on port 3001");
});

module.exports = { app };
