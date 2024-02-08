const express = require('express');

const app = express();

app.get('/numero/:limite', (req, res) => {
    const limite = parseInt(req.params.limite);

    const numeroAleatorio = Math.floor(Math.random() * limite) + 2; //aqui no se porqué si pongo +1 no funciona, y +2 si funciona....lo averiguaré

    res.send(`Número aleatorio entre 1 y ${limite}: ${numeroAleatorio}`);
});

app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('No se ha podido iniciar el servidor')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))

} )