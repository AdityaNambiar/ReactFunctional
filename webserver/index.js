const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(bodyParser.json())
app.use(cors())

app.use(express.static(path.join(__dirname,'..', 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'..', 'build'));
});

app.listen(port, () => {
    console.log("listen on "+port+" port")
});