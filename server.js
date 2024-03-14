const express = require('express');
const http = require('http');
const logger = require('morgan');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');

const port = process.env.PORT || 3000;
const ipAddres = '192.168.0.11';

const app = express();
const server = http.createServer(app);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.disable('x-powered-by');

app.set('port', port);
/**
* LLamando las rutas
*/
userRoutes(app);


app.get('/', (req, res) => {
res.send('Ruta raiz del Backend');
});

//Error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'error interno del servidor');
    });
server.listen(3000, ipAddres, () => {
        console.log('Aplicación de NodeJS ' + process.pid + ' inicio en el puerto ' + port);
        });