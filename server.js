var application_root = __dirname,
    express = require("express"),
    bodyParser = require("body-parser"),
    request = require("request"),
    logger = require("morgan"),
    session = require("express-session"),
    models = require("./models"),
    userRouter = require("./routers/user_router.js"),
    path = require("path");

var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: "yungbackbone",
  saveUninitialized: false,
  resave: false
}));
app.use(express.static( path.join( application_root, "public" )));
app.use(express.static( path.join( application_root, "browser" )));
app.use("/users", userRouter);

var User = models.users;


app.post("/sessions", function(req, res) {

  var emailAddress = req.body.username;
  var password = req.body.password;

  User
  .findOne({
    where: {email_address: emailAddress }
  })
  .then(function(user) {
    if (user) {
      bcrypt.compare(password, user.password_digest, function(err, result) {
        if (result) {
          req.session.currentUser = user.id;
          res.send(user);
        } else {
          res.status(400).send({
            err: 400,
            msg: "Incorrect password"
          });
        }
      });
    } else {
      res.status(400).send({
        err: 400,
        msg: "There is no account with that email address"
      });
    }
  });
});

app.delete("/sessions", function(req, res) {
  delete req.session.currentUser;
  res.send({msg: "Logged out"});
});

//For testing only
app.get("/current_user", function(req, res) {
  if (req.session.currentUser) res.send(req.session.currentUser);
});

//This route logs in on sign up, that's why it is out here
app.post("/users", function(req, res) {
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    User
    .create({
      //TODO: Add all the other categories here like interests and such
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email_address: req.body.email_address,
      password_digest: hash
    })
    .then(function(user) {
      //This logs in on sign up
      req.session.currentUser = user.id;
      res.send(user);
    });
  });
});

app.listen(3000, function() {
  console.log("Server on 3000");
});