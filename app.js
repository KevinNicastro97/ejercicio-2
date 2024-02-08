const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>HOLA MUNDO</h1> <p>Desde express</p>');
});

app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('No se ha podido iniciar el servidor')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))

} )