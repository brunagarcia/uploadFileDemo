//require modules.
const express = require('express');
const app = express();
const fs = require('file-system');
const port = process.argv[2] || 8080; //Set it up port number.
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const formidable = require('formidable');
const fileUpload = require('express-fileupload');

//using body parser to get info from search
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



//Allowing cors access. 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.post('/testPort', (req, res) => {
    console.log(req.body)
    let temp = JSON.stringify(req.body)
    console.log(temp)
    res.send(temp)
})

//Listening to port
app.listen(8080, () => {
    console.log(`Server Started on http://localhost:${port}`);
    console.log('Press CTRL + C to stop server');
});