// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

//  Added Multer for file upload
const multer = require('multer'); // --fl

// Get our API routes
const api = require('./server/routes/api');

// Get our file upload API routes
const upload = require('./server/routes/fileupload');

// Get Auth routs
const auth = require('./server/routes/auth');

const app = express();

const port = process.env.PORT || '3000';

// Added CORS -cross origin resource sharing  --fl
const url_str = 'http://ec2-35-183-42-155.ca-central-1.compute.amazonaws.com:3000';
app.use(function(req, res, next) { //allow cross origin requests
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        // res.header("Access-Control-Allow-Origin", `http://localhost:${port}`);
        // res.header("Access-Control-Allow-Origin", `https://guarded-cove-17160.herokuapp.com:${port}`);
        res.header("Access-Control-Allow-Origin", url_str);
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials", true);
        next();
    });

// // Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
// app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, 'dist')));


// Set our api routes
app.use('/api', api);

// Set our upload routes
app.use('/upload', upload);

// Set our auth routes
app.use('/users', auth);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */

app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
