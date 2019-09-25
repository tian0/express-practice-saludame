const express = require('express');
const app = express();

app.get('/makers/:nombre', (req, res) => {
if (req.params.nombre == null) {
    return res.send('<h1>Hola desconocido!</h1>');
}

else {
  return res.send('<h1>Hola ' + req.params.nombre.charAt(0).toUpperCase() + req.params.nombre.slice(1) + '!</h1>');
}
});

app.listen(3000, () => console.log('Listening on port 3000!'));