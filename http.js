const http = require('http'); //require http
const path = require('path');
const fs = require('fs');

// const server = oprette server + implementere html sider

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            res.writeHead(200, {'Content-type': 'text/html'}); //omdanner det til html
            res.write(data);
            res.end();
        });
    }
    if(req.url === '/books') { /*
        fs.readFile(path.join(__dirname, 'books.html'), (err, data) => {
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(data);
            res.end();
        });*/
        fs.readFile(path.join(__dirname, 'books.xml'), (err, data) => {
            res.writeHead(200, {'Content-type': 'text/xml'});
            res.write(data);
            res.end();
        })
    }
    if(req.url === '/authors') {
        fs.readFile(path.join(__dirname, 'authors.html'), (err, data) => {
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(data);
            res.end();
        });
    };
});

//laver serveren. res = respond, req = request
/* const server = http.createServer((req, res) => {
    console.log(req);
    res.write('Hello there, genereal kenobi');
    res.end();
}) */


//ændrer indholdet baseret på hvilken url man er på, hhv index og /user
/* const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write('<h1>welcome to the homepage</h1>');
        res.end();
    }
    if(req.url === '/user') {
        res.write('welcome to the user page');
        res.end();
    }
})
*/ 
//definerer porten og meddelelsen - så man kan se, at serveren er oppe at køre 
server.listen(3000, () => console.log('server is up and running'));
