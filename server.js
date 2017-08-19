const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require("./models/user.js");

const app = express();
const PORT = process.env.PORT || 3000;


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




// const clientID = '3HkM4SoAWb0uxd_Kcf2HJA';
// const clientSecret = 'p1x3DXq8dt692LCWXtVonwTMZchVsw8dY6UoUQG696HiEOJ6ZqsU8kQXM6uBdA9x';
// let token;
// //=============================================================
// const yelp = require('yelp-fusion');
// yelp.accessToken(clientID, clientSecret).then(response => {
//   console.log(response.jsonBody.access_token);
//   token = response.jsonBody.access_token;
//   testingYelp(token)
// })


// const testingYelp =  (token) => {
//     let client = yelp.client(token);
//     client.search({
//     term:'Fast Food',
//     location: 'san francisco, ca'
//     }).then(response => {
//     console.log(response.jsonBody);
//     }).catch(e => {
//     console.log(e);
// });
// }

// require('./routes/api.js')(app);

app.get('*', (req, resp) => {
    resp.sendFile(__dirname + path.join('/public/index.html'));
})

db.once("open", function() {
    console.log("Mongoose connection successful.");
    app.listen(PORT, () => {
          console.log(`Page is being hosted on ${PORT}`);   
    })
});
