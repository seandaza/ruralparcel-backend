/**
 * Autor: Juan Diego Romero
 * fecha: 2/10/2021
 * Descripción: Se conecta a la base de datos y valida si fue exitosa;
 * Clase: conectarBD.js
 */
const mongoose = require("mongoose");
const database = require("./db");

class conectarBD{
    constructor(){
        mongoose.connect(database.db).then(()=>{
            console.log("Conexión a BD de RuralParcel");
        }).catch((err)=>{
            console.error("Error de conexión");
        });
    }

}
module.exports = conectarBD;