const { response } = require("express");

const usuariosGet = (req, res = response) => {
    const { q, nombre, apikey } = req.query;
    res.json({
        msg: "get API - controlador",
        q,
        nombre,
        apikey,
    });
};

const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;

    res.json({
        msg: "post API - controlador",
        nombre,
        edad,
    });
};

const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        msg: "put API - controlador",
        id,
    });
};

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: "Patch API - controlador",
    });
};

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "Delete API - controlador",
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
};

/**
 Flujo Completo:
El cliente hace una solicitud GET a la ruta "/api/usuarios".
El router en Express dirige la solicitud al controlador usuariosGet.
El controlador usuariosGet recibe el objeto req (solicitud) y res (respuesta).
Dentro del controlador, la función res.json() envía una respuesta en formato JSON
con el mensaje "get API - controlador".

---------------------------------------

GET: Recuperar un recurso o una lista de recursos.
POST: Crear un nuevo recurso.
PUT: Actualizar un recurso existente.
DELETE: Eliminar un recurso.
PATCH: Actualizar parcialmente un recurso.

Ejemplo:
GET /usuarios: Obtiene una lista de usuarios.
GET /usuarios/123: Obtiene la información del usuario con ID 123.
POST /usuarios: Crea un nuevo usuario.
PUT /usuarios/123: Actualiza el usuario con ID 123.
DELETE /usuarios/123: Elimina el usuario con ID 123.


códigos de estado HTTP que indican el éxito o el fallo de una operación. Algunos ejemplos son:
200 OK: La solicitud fue exitosa.
201 Created: Un recurso fue creado con éxito.
400 Bad Request: La solicitud tiene un error de formato o datos incorrectos.
404 Not Found: El recurso solicitado no fue encontrado.
500 Internal Server Error: Ocurrió un error en el servidor.
 */
