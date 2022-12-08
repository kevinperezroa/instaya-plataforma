const express = require('express');
const router = express.Router();
const packageSchema = require('../models/packageModels')
module.exports = router;

router.post('/packages', (req, res)=>{
    const user = packageSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => console.error({message: error}))
})

router.get('/packages',(req,res) =>{
    packageSchema
        .find()
        .then((data)=> /*console.log(data))/*/res.json(data))
        .catch((error)=> console.error({message: error}))
        
})

router.get('/packages/:id', (req, res)=>{
    const {id} = req.params;
    packageSchema
        .findById(id)
        .then((data)=> res.json(data))
        .catch((error)=> console.error({message: error}))
})

router.put('/packages/:id', (req, res)=>{
    const{id} = req.params;
    const{fecha, hora, largo, ancho, alto, peso, ciudadRecogida, direccionRecogida, nombreDestina, docId, direccionEntrega, ciudadEntrega} = req.body;
    userSchema
        .updateOne({_id: id}, {$set: {fecha, hora, largo, ancho, alto, peso, ciudadRecogida, direccionRecogida, nombreDestina, docId, direccionEntrega, ciudadEntrega}})
        .then((data)=> res.json(data))
        .catch((error)=> console.error({message: error}))
})

router.delete('/packages/:id', (req, res)=>{
    const {id} = req.params;
    packageSchema
        .remove({_id: id})
        .then((data)=> res.json(data))
        .catch((error)=> console.error({message: error}))
})