const express = require("express");
const cors = require("cors");

class Server {
    constructor() {
        // Inicializamos las propiedades en el constructor
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuariosParh = "/api/usuarios";

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicación

        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        //lectura y parceo del body
        this.app.use(express.json());

        //Directorio Público
        this.app.use(express.static("public"));
    }

    routes() {
        this.app.use(this.usuariosParh, require("../routes/usuarios"));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en el puerto", this.port);
        });
    }
}

module.exports = Server;

/**
this.app:
Hace referencia a la instancia de Express creada en el constructor (this.app = express();).
listen(this.port): El método listen() de Express pone  a la aplicación a escuchar en el puerto especificado.
this.port hace referencia al valor que se le ha asignado a la propiedad port de la clase,
que típicamente proviene de process.env.PORT, pero puede tener un valor por defecto.


----------------------

this.app.use():

use() es un método en Express que se utiliza para registrar un middleware. Los middlewares son funciones que se ejecutan durante el ciclo de vida de una solicitud HTTP antes de que se envíe una respuesta. Pueden modificar el objeto de solicitud (req), el objeto de respuesta (res), o finalizar la respuesta.
 */
