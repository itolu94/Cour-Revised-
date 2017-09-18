const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const axios = require('axios');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require("./models/user.js");

const app = express();
const PORT = process.env.PORT || 3001;


app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/cour");
var db = mongoose.connection;

db.on("error", function(error) {
	console.log("Mongoose Error: " + error);
});

require('./routes/api.js')(app);

app.get('*', (req, resp) => {
    resp.sendFile(__dirname + path.join('/public/index.html'));
})


db.once("open", function() {
    console.log("Mongoose connection successful.");
    app.listen(PORT, () => {
          console.log(`Page is being hosted on ${PORT}`);   
    })
});
