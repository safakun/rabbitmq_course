const express = require('express'); 
const bodyParser = require('body-parser');
const app = express(); 
const Producer = require('./producer');

const producer = new Producer();

app.use(bodyParser.json("application/json"));

const port = 5000;

app.post("/sendlog", async(req, res, next) => {
    await producer.publishMessage(req.body.logType, req.body.message);
    res.send();
});

app.listen(port, () => {
    console.log(`server started on port: ${port}`);
})
