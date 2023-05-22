const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const stagesRoutes = require("./routes/stages-Routes");
const etudiantsRoutes = require("./routes/etudiants-Routes");
const HttpErreur = require("./models/http-erreur");

const app = express();

app.use(bodyParser.json());

app.use((requete, reponse, next) => {
  reponse.setHeader("Access-Control-Allow-Origin", "*");
  reponse.setHeader("Access-Control-Allow-Headers", "*");
  reponse.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/api/stages", stagesRoutes);
app.use("/api/etudiants", etudiantsRoutes);

app.use((requete, reponse, next) => {
  return next(new HttpErreur("Route non trouvée", 404));
});

app.use((error, requete, reponse, next) => {
  if (reponse.headerSent) {
    return next(error);
  }
  reponse.status(error.code || 500);
  reponse.json({
    message: error.message || "Une erreur inconnue est survenue",
  });
});

mongoose
.connect("mongodb+srv://sarahkessi:Pax!PBjP49.2Kfj@site.o5omnly.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    app.listen(5000);
    console.log("Connexion à la base de données réussie");
  })
  .catch((erreur) => {
    console.log(erreur);
  });

//app.listen(5000);
