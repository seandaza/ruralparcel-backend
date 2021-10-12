/**
 * Autor: Juan Diego Romero, Sean Daza Herrera
 * fecha: 2/10/2021
 * Descripción: Metodos para ser consumidos y ejecutados por API Create, GetTerritories, Update, Delete
 *              Conecta con el Modelo
 * Clase: territoryControllers.js
 */
 const Territory = require('../models/territory');

 class territoryControllers {
 
     //Metodo de creación
     create(req, res) {
         Territory.create(req.body, (error, data) => {
             if (error) {
                 res.status(500).json({ error });
             } else {
                 res.status(201).json(data);
                
             }
         });
     }
     //Metodo de Consultar territorios
     getTerritories(req, res) {
         Territory.find((error, data) => {
             if (error) {
                 res.status(500).json({ error });
             } else {
                 res.status(200).json(data);
             }
         });
     }
     //Metodo de Actualización
     update(req, res) {
         let { id, numberHectares, locationTerritory, ownerName, irrigationSystems, Descriptions, Abailability } = req.body;
         let objTerritory = {
             numberHectares, locationTerritory, ownerName, irrigationSystems, Descriptions, Abailability
         }
         Territory.findByIdAndUpdate(id, {
             $set: objTerritory
         }, (error, data) => {
             if (error) {
                 res.status(500).json({ error });
             } else {
                 res.status(200).json(data);
             }
         });
     }
     //Metodo de eliminación
     delete(req, res){
         let{id}=req.body;
         Territory.findByIdAndRemove(id,(error,data)=>{
             if (error){
                 res.status(500).json({ error });
             }
             else{
                 res.status(200).json(data);
             }
         });
     }
 }
 
 module.exports = territoryControllers; 