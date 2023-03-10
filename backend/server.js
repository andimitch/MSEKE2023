

console.log("hello")
require('dotenv').config();
const express = require('express'); // express is the framework that makes things very fast and easy. It was installed as the dependancy in the package.json
const app = express();              // app is a function that express creates, and we can then do things with it
const path = require('path');       // common core module, which lets us use the path directory
const logger = require('./middleware/logEvents'); // import the file from middleware
const cors = require('cors');           // listed as a dependancy in the package.json
const roots = require('./routes/root'); // import the routes root file, which stores the route
const myfun = require("./controllers/find-subtree");
let tree = {}
const log = console.log



const mongoose = require('mongoose');  // mongoose is a framework that lets us interact with mongoDB
const connectDB = require('./config/dbConnect');  // function connectDB is defined in the dbConnect.js file, which just calls the mongoose.connect() function with our database_uri
mongoose.set('strictQuery', true);     // adding this in cuz it was giving an error without it
connectDB().then((res) => {
    let resp = myfun();
    log("THE TREE IS==========================");
    return resp
  }).then((res) => {
    tree = res;
  })                  
  
  
  // call the function we imported above


const PORT = process.env.PORT || 3500; // this is the port where our server exists

// this imports the logEvents file, where we created a logger for any request that goes through the site
app.use(logger);

// cross origin resource sharing
app.use(cors());

// app.use() is middleware, which is rolls down to everything below, so it applies to all routes
app.use(express.urlencoded({extended: false})); // handle urlencoded data (if form data comes in, we need this)\
app.use(express.json());                        // handle json data
app.use(express.static(path.join(__dirname, './public'))); // used to serve static files (files that should be available to the public)

const data = {name: "andrea", age: "12", gender: "F"};

app.get('/person', (req, res) => {
    res.json(data);
});

app.get('/tree', (req, res) => {
    res.json(tree);
});


const findDescription = require("./controllers/find-description");
//findDescription();

// routes
app.use(roots);

mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    
})

// PATH is the path on the server, i.e. the page we are working on
// HANDLER is the call back function when we visit this path
//app.METHOD(PATH, HANDLER)


//app.get()  // get data
//app.post() // add data
//app.put() // edit data



//require('dotenv').config();
//const mongoose = require('mongoose');
//const connectDB = require('./config/dbConnect')

//const express = require('express');
//const app = express();
//const path = require('path');
//const {logger} = require('./middleware/logEvents');
//const cors = require('cors');
//const { connect } = require('http2');
//const PORT = process.env.PORT || 3500

//connectDB();

// custom middleware
//app.use(logger);

//var insertRouter = require('./trial/insert-route');
//app.use('/', insertRouter);

// built in middleware
//  handled for all routes
//app.use(express.urlencoded({ extended: false })); // handing form data
//app.use(express.json()); // is json data is submitted
//app.use(express.static(path.join(__dirname, '/public'))); // allows you to find things in the public folder (withouth this css wouldn't link)

// routes
//app.use('/', require('./routes/root'));

/*
app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
*/

/*
// not working?? 
// Cross Origin Resource Sharing
const whitelist = ['https://www.google.ca/'];
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
*/