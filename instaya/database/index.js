const mongoose = require("mongoose");
const config = require('../config');

const dbString = config.dbString;

const init = async () => {
    const options = {
        userNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try{
        await mongoose.connect(dbString);
        console.log("conectadoa la base de datos");
    } catch (error) {
        console.log('Error message:', {error})
    }
}

module.exports = {init}