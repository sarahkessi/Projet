const { v4: uuidv4 } = require("uuid");
const HttpErreur = require("../models/http-erreur");

const Etudiant = require("../models/etudiant");
const { get } = require("mongoose");

const ETUDIANTS = [];

const getEtudiants = async (requete, reponse, next) => {
  let etudiants;

  try {
    etudiants = await Etudiant.find({}, "-motDePasse");
  } catch {
    return next(new HttpErreur("Erreur accès utilisateurs"), 500);
  }

  reponse.json({
    etudiants: etudiants.map((etudiant) =>
      etudiant.toObject({ getters: true })
    ),
  });
};

const inscription = async (requete, reponse, next) => {
  const { numeroDA, nom, courriel, profil, motDePasse } = requete.body;
  let etudiantExiste;

  try {
    etudiantExiste = await Etudiant.findOne({ courriel: courriel });
  } catch {
    return next(new HttpErreur("Échec vérification, étudiant existe", 500));
  }

  if (etudiantExiste) {
    return next(
      new HttpErreur("Cet étudiant existe déjà, veuillez vous connecter", 442)
    );
  }

  let nouvelEtudiant = new Etudiant({
    numeroDA,
    nom,
    courriel,
    profil,
    motDePasse,
    stages: [],
  });

  try {
    await nouvelEtudiant.save();
  } catch (err) {
    console.log(err);
    return next(new HttpErreur("Erreur lors de l'ajout de l'étudiant", 422));
  }
  reponse
    .status(201)
    .json({ etudiant: nouvelEtudiant.toObject({ getter: true }) });
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
exports.inscription = inscription;
exports.connexion = connexion;
