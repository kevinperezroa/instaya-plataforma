const mongoose = require("mongoose");

const packageSchema = mongoose.Schema({
    fecha:{
        type: Date,
        required: true
    },
    hora: {
        type: String,
        required: true
    },
    largo: {
        type: Number,
        required: true
    },
    ancho: {
        type: Number,
        required: true
    },
    alto: {
        type: Number,
        required: true
    },
    peso: {
        type: Number,
        required: true
    },
    ciudadRecogida: {
        type: String,
        required: true
    },
    direccionRecogida: {
        type: String,
        required: true
    },
    nombreDestina: {
        type: String,
        required: true
    },
    docId:{
        type: Number,
        required: true
    },
    direccionEntrega: {
        type: String,
        required: true
    },
    ciudadEntrega: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Package', packageSchema);