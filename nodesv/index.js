const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json())
app.use(cors())

app.use(express.static(path.join(__dirname,'..', 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'..', 'build'));
});

app.post('/takeData', (req,res) => {
    try {   
        const msg = req.body.msg;
        console.log("client msg was: ", msg);
        res.status(200).send(`${msg}-${Math.random()}`);
    }catch(e) {
        res.status(400).send(e);
    }
})
app.listen(5000, () => {
    console.log("listen on 5K port")
});