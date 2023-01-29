const express = require('express');
const appRoute = require('./routes/appRoute.js');
const Constants = require('./utils/Constants.js');

const app = express();

app.use(express.json());
app.use("", appRoute);


// LISTEN
app.listen(Constants.port, () => {
  console.log(`Ejemplo de API corriendo en el puerto ${Constants.port}`);
});