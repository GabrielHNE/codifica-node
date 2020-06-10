const express = require('express');
const path = require('path');


const routes = express.Router();

routes.get('/', (req, res)=>{
   res.sendFile(path.resolve(__dirname, '../../index.html'));
});

routes.post('/contato', (req, res) =>{
    console.log(req.body);
    
    //save the cliente contact in the database

    //res.send('ok');
    res.status(200);
});



module.exports = routes;