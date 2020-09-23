let express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");

//instanciation du server express
let app = express();

//importation de la base de données
const database = require("./database/config/database");
//synchronisation à la base de données
database.sync();

//CORS
app.use("/", cors());

//utilisation du bodyparser et récupération des données transmises
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//utilisation des routes
app.use(routes);

//démarrage du serveur
let server = app.listen(8080, () => {
  console.log("serveur démarré");
});

module.exports = server;
