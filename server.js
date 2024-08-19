const http = require('http');
const fs = require('fs');
const path = require('path');

// Función para manejar las solicitudes
function handleRequest(req, res) {
    let filePath = path.join(__dirname, 'Public', req.url === '/' ? 'index.html' : req.url);

    // Extensión del archivo
    let extname = path.extname(filePath);
    let contentType = 'text/html';

    // Tipos de contenido según la extensión
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.ico':
            contentType = 'image/x-icon';
            break;
        case '.pdf':
            contentType = 'application/pdf';
            break;
    }

    // Leer archivo y responder al cliente
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code == 'ENOENT') {
                fs.readFile(path.join(__dirname, 'Public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                });
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
}

// Crear el servidor
const server = http.createServer(handleRequest);

// El servidor escuchará en el puerto 5000
const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
