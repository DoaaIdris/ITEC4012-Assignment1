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

app.get('/api/japan', (re, res) =>{
    //return dummy data
    const japan = ["Japan consists of over 6,800 islands", "Japan's trains are among the world's most punctual, with an average delay of just 18 seconds!", 
                        "In Japan, there are more pets than children", "The birth rate is so low that adult diapers are sold more than baby ones", 
                        "685 kids were rushed to the hospital in 1997 after an intense pokemon episode that caused dizziness, vomiting and seizures", 
                        "They use more paper for comics than toilet paper in Japan", "There are more than 1500 earthquakes a year", 
                        "The greater Tokyo area is the largest metropolitan area in the world, with over 37 million people", 
                        "Japan is the world's largest consumer of Amazon rain forest timber", 
                        "The world's most expensive tuna was sold in Japan for US$3.1 million at Tokyo's fish market"];

    //sending a response should be in JSON
    res.send(japan);
});

app.get('/api/space', (re, res) =>{
    //return dummy data
    const space = ["1 million earths could fit inside the sun", "If you could fly a plane to Pluto, it would take more than 800 years", 
                    "An asteroid about the size of a car enters the earth's atmosphere every year, but burns up before it reaches us", 
                    "There are more stars in the universe than grains of sand on all the beaches on Earth", 
                    "The sunset on Mars appears blue", "One day on Venus is longer than a year on Earth", 
                    "If 2 pieces of the same metal touch in space, they will bond and be permanently stuck together", 
                    "Space is completely silent", "A full NASA space suit costs $12,000,000", 
                    "There is a volcano on Mars 3 times the size of Mount Everest"]

    //sending a response should be in JSON
    res.send(space);
});


// running the express http server on the port we specified
app.listen(port, () =>{
    console.log("Listening on port", port);
});