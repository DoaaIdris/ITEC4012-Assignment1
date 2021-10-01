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

app.get('/api/countries', (re, res) =>{
    //return dummy data
    const countries = ["Canada", "United States", "Russia", "China", "Japan", "Egypt", "Germany", "South Africa", "Australia", "UAE"];

    //sending a response should be in JSON
    res.send(countries);
});

app.get('/api/computers', (re, res) =>{
    //return dummy data
    const computers = ["Apple", "DELL", "Acer", "Microsoft", "Lenovo", "HP", "Asus", "Toshiba", "Sony", "Samsung"];

    //sending a response should be in JSON
    res.send(computers);
});


// running the express http server on the port we specified
app.listen(port, () =>{
    console.log("Listening on port", port);
});