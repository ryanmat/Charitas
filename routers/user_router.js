var bodyParser = require("body-parser"),
    request = require("request"),
    logger = require("morgan"),
    session = require("express-session"),
    express = require("express"),
    models = require("../models"),
    path = require("path"),
    User = models.users;

var userRouter = express.Router();

var restrictAccess = function(req, res, next) {
  var sessionID = parseInt(req.session.currentUser);
  var reqID = parseInt(req.params.id);
  sessionID === reqID ? next() : res.status(401).send({ 
    err: 401, 
    msg: "You can't see that"
  });
};

userRouter.get("/:id", restrictAccess, function(req, res) {
  User
  .findOne(req.params.id)
  .then(function(user) {
    res.send(user);
  });
});

userRouter.put("/:id", restrictAccess, function(req, res) {
  User
  .findOne(req.params.id)
  .then(function(user) {
    //TODO: What would the user want to update??
  });
});

module.exports = userRouter;