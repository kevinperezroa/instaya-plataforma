const express = require("express");
const userRoutes = require('../routes/user');
const packageRoutes = require('../routes/package')
const cors = require("cors");
const config = require('../config');

const{host, port} = config.http;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', packageRoutes);
app.get("/plataforma",(require, response)=>{
    response.json(require.body);

})

const init = () => {
    app.listen(port, host, () => {
        console.log('server is running on http://',{host},':',{port});
    })
}

module.exports = {init}