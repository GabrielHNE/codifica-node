const express = require('express');
const routes = require('./routes');
const path = require('path');
const port = 3000;

const app = express();

//configurar o servidor para apresentar arquivos staticos
app.use(express.static(path.resolve(__dirname, '../../public')));

//
app.use(express.json());
app.use(routes);


app.listen(process.env.PORT || port, () => {
    console.log(`Server Running`);
});
