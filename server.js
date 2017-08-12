const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.get('', (req, resp) => {
    resp.sendFile(__dirname + path.join('/index.html'));
})



app.listen(PORT, () => {
    console.log(`Page is being hosted on ${PORT}`);
})