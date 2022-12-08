const express = require('express');
const router = express.Router();
const userSchema = require('../models/userModels')
module.exports = router;

router.post('/users', (req, res)=>{
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => console.error({message: error}))
})

router.get('/users',(req,res) =>{
    userSchema
        .find()
        .then((data)=> res.json(data))
        .catch((error)=> console.error({message: error}))
})

router.get('/users/:id', (req, res)=>{
    const {id} = req.params;
    userSchema
        .findById(id)
        .then((data)=> res.json(data))
        .catch((error)=> console.error({message: error}))
})

router.put('/users/:id', (req, res)=>{
    const{id} = req.params;
    const{name, userName, email, password} = req.body;
    userSchema
        .updateOne({_id: id}, {$set: {name, userName, email, password}})
        .then((data)=> res.json(data))
        .catch((error)=> console.error({message: error}))
})

router.delete('/users/:id',(req, res)=>{
    const {id} = req.params;
    userSchema
        .remove({_id: id})
        .then((data)=> res.json(data))
        .catch((error)=> console.error({message: error}))

})

