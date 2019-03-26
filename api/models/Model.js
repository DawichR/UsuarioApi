'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Inserte un nombre'
  },
  lastname: {
    type: String,
    required: 'Inserte un Apellido'
  },
  age: {
    type: Number,
    required: 'Inserte su edad'
  },
  profession: {
    type: String,
    required: 'Inserte su carrera'
  },
  phone: {
    type: String
  },
  address: {
    type: String,
    required: 'Inserte su direccion'
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);