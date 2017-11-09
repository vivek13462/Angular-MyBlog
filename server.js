const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

//parsers
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false}));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
});

//set port
const port = process.env.port || '8080';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log('MyBlog is running on localhost:8080'));