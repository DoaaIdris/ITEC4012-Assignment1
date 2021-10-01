//requiring express
const express = require('express');

//initializing express app
const app = express();

//specifying a port ot listen on
const port = 8080;

// API / urls
app.get('/', (req, res) => {
    res.send("Hi from the express server!");
});


// running the express http server on the port we specified
app.listen(port, () =>{
    console.log("Listening on port", port);
});