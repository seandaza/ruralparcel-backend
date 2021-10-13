/**
 * Autor: Juan Diego Romero, Sean Daza Herrera.
 * fecha: 2/10/2021
 * Descripción: Se importa Express, Mongodb, db
 *              Se conecta con carpeta Routers
 *              Se crea objeto para conectar a la base de datos
 * Clase: index.js
 */

//Importar express
const express = require('express');
//Importar mongoose
const mongoose = require('mongoose');
//Importamos url de conexion a la Base de Datos
const conectarBD = require("./database/conectarBD");
//Importamos las Rutas
const territoryRouter = require('./routers/territoryRouter');
const cors =require('cors');


class Server{
    constructor(){
        const objconectarBD=new conectarBD();
        this.app = express();
        this.app.use(cors());
        //Se llama el metodo config para levantar el servidor
        this.config();
     
        
    }
    config(){
        //Indicar el puerto por el que se ejecutará el servidor
        this.app.set('port', process.env.PORT || 3000);
        //Indicar que las solicitudes http se trabajará en JSON
        this.app.use(express.json());

        //Ruta raiz
        const router = express.Router();
        router.get('/', (req, res)=>{
            res.status(200).json({message: "Nueva conexión"});
        });
        /**
         * ******************Rutas**********************
         * ******/
         const territoryR = new territoryRouter();
        
        
        //añadir las rutas al servidor
        this.app.use(router);
        this.app.use(territoryR.router);
        
        //Levantar el servidor/correr el servidor
        this.app.listen(this.app.get('port'), ()=>{
            console.log("Servidor corriendo por el puerto => ", this.app.get('port'));
        });

    }



}

const objServer = new Server();



