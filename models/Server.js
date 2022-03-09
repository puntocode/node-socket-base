const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/SocketController');


class Server{

    constructor(){
        this.app    = express();  
        this.port   = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io     = require('socket.io')(this.server); //información de todos los socket conectados

        this.paths = {}

        //Middlewares
        this.middlewares();

        //Rutas
        this.routes();

        //Socket
        this.sockets();
    }



    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static('public'));
    }


    routes(){
        // this.app.use(this.paths.auth, require('../routes/auth'));

    }

    sockets(){
        this.io.on('connection', socketController)
    }


    listen(){
        this.server.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto: ', this.port);
        });
    }

}


module.exports = Server;