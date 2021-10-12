/**
 * Autor: Juan Diego Romero
 * fecha: 2/10/2021
 * Descripción: Clase encargada de establecer las acciones del CRUD hacia la base de datos por medio de api
 *              Configuracion del consumo de apis: Get, Post, Put, Delete
 *              Conecta con el Controlador
 * Clase: territoryRouter.js
 */
const express = require('express');
const territoryControllers = require('../controllers/territoryControllers');

class territoryRouter{
    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        const objTerritoryC = new territoryControllers();
        this.router.get("/territory", objTerritoryC.getTerritories);
        this.router.post("/territory", objTerritoryC.create);
        this.router.put("/territory", objTerritoryC.update);
        this.router.delete("/territory",objTerritoryC.delete);
    }
}

module.exports = territoryRouter;