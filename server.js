const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');


const app = express();
const PORT = process.env.PORT || 3000;


app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



require('./controller/api.js')(app);

app.get('*', (req, resp) => {
    resp.sendFile(__dirname + path.join('/public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Page is being hosted on ${PORT}`);   
});
