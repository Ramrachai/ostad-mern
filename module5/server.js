const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // Log a message when the server starts listening
    console.log('Server is listening on port 3000');

    // Set content type for the response
    res.setHeader('Content-Type', 'text/plain');

    // Handle different URL paths
    if (req.url === '/') {
        res.end('This is Home Page');
    } else if (req.url === '/about') {
        res.end('This is About Page');
    } else if (req.url === '/contact') {
        res.end('This is Contact Page');
    } else if (req.url === '/file-write') {
        // Use fs.writeFile to create a file and write content
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.statusCode = 500;
                res.end('Internal Server Error');
            } else {
                res.end('File demo.txt created and content written');
            }
        });
    } else {
        res.statusCode = 404;
        res.end('Page not found');
    }
});

// Listen on port 3000
server.listen(3000);
