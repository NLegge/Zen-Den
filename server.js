//Bringing in necessary dependencies.
var express = require('express');
var mongoose = require('mongoose');
var PORT = process.env.PORT || 3001;
var bodyParser = require('body-parser');
var path = require('path');
var blogPosts = require('./routes/api/BlogPosts');
var userData = require('./routes/api/userData');
const db = require("./models");

app = express();

//Middleware declaration for body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Allows us to use local styling from our public/assets folder.
app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'client/build')));

// middleware to authorize user routes

var middleware = function (req, res, next) {
  var accessToken = req.get("Authorization");
  console.log(accessToken);
  db.User 
  .findOne ({
    accessToken
  })
  .then(function(userData) {
    if (userData) {
      req.user = userData;
      next();
    }
    else {
      res.status(401).send ("Unauthorized")
    } 
  })
}

app.use('/api/blog', middleware, blogPosts);
app.use('/api/users', userData);


// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/zenden"
);

//Syncing with the database prior to listening on port 3001
app.listen(process.env.PORT || 3001, function() {
  console.log("App listening on PORT " + PORT);
});

