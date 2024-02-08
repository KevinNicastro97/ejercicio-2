const express = require('express');

const app = express();

const nombres = ["Juan", "María", "Carlos", "Ana", "Pedro"];

app.get('/persona', (req, res) => {
    res.json({ personas: nombres });
});

app.get('/persona/:indice', (req, res) => {
    const indice = parseInt(req.params.indice);
    if (indice >= 0 && indice < nombres.length) {
        res.json({ persona: nombres[indice] });
    } else {
        res.status(404).send("Persona no encontrada");
    }
});

app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('No se ha podido iniciar el servidor')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))

} )