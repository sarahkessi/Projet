const { v4: uuidv4 } = require("uuid");
const HttpErreur = require("../models/http-erreur");

const Etudiant = require("../models/etudiant");
const { get } = require("mongoose");

const getEtudiants = async (requete, reponse, next) => {
  let etudiants;

  try {
    etudiants = await Etudiant.find({}, "-id");
  } catch {
    return next(new HttpErreur("Erreur accès utilisateurs"), 500);
  }

  reponse.json({
    etudiants: etudiants.map((etudiant) =>
      etudiant.toObject({ getters: true })
    ),
  });
};

const ajoutEtudiant = async (requete, reponse, next) => {
  const {
    numeroDA,
    nom,
    courriel,
    profil,
  } = requete.body;

  const nouvelEtudiant = new Etudiant({
    numeroDA,
    nom,
    courriel,
    profil,
    stages:[]
  });

  try {
    await nouvelEtudiant.save();
  } catch (err) {
    const erreur = new HttpErreur("Ajout de l'élève échoué", 500);
    return next(erreur);
  }
  reponse.status(201).json({ etudiant: nouvelEtudiant });
};

const connexion = async (requete, reponse, next) => {
  const { courriel, motDePasse } = requete.body;

  let etudiantExiste;

  try {
    etudiantExiste = await Etudiant.findOne({ courriel: courriel });
  } catch {
    return next(
      new HttpErreur("Connexion échoucée, veuilez réessayer plus tard", 500)
    );
  }

  if (!etudiantExiste || etudiantExiste.motDePasse !== motDePasse) {
    return next(new HttpErreur("Courriel ou mot de passe incorrect", 401));
  }

  reponse.json({
    message: "Connexion réussie !",
    etudiant: etudiantExiste.toObject({ getters: true }),
  });
};

exports.getEtudiants = getEtudiants;
exports.ajoutEtudiant = ajoutEtudiant;
exports.connexion = connexion;
