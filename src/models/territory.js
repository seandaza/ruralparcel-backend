/**
 * Autor: Juan Diego Romero
 * fecha: 2/10/2021
 * Descripción: Se arma el esquema de los datos a usar para territorios
 * Clase: territoryControllers.js
 */
const mongoose = require('mongoose');
const schema = mongoose.Schema;

var territorySchema=new schema({

    numberHectares:{
        type: Number
    },
    locationTerritory:{
        type: String
    },
    ownerName:{
        type: String
    },
    irrigationSystems:{
        type: String
    },
    Descriptions:{
        type: String
    },
    Abailability:{
        type: String
    }
},{
    collection: 'territories'
});
module.exports = mongoose.model('territory',territorySchema);