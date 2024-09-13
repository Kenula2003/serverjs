
const http = require('http'); 
const server = http.createServer((req, res) => {

    res.statusCode = 200;


    res.setHeader('Content-Type', 'text/html');

    
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Node.js HTTP Server</title>
        </head>
        <body>
            <h1>Hello from my Node.js HTTP server!</h1>
            <p>This is a custom message being served from my server.</p>
        </body>
        </html>
    `);
});


server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
