const { reponse } = require("express");
const { default: mongoose, mongo } = require("mongoose");
const { v4: uidv4 } = require("uuid");

const HttpErreur = require("../models/http-erreur");

const Stage = require("../models/stage");
const Etudiant = require("../models/etudiant");

const getStageById = async (requete, reponse, next) => {
  const stageId = requete.params.stageId;
  let stage;
   try {
    stage = await Stage.findById(stageId);
   } catch (err) {
    return next (
      new HttpErreur("Erreur lors de la récuperation du stage, 500")
    );
   }

   if (!stage) {
    return next (
      new HttpErreur("Aucun stage trouvé pour l'id fourni", 404));
    }
    reponse.json({ stage: stage.toObject({ getters: true}) });
   
};

const getStages = async (requete, reponse, next) => {
  let stages;

  try {
    stages = await Stage.find({}, "-id");
  } catch {
    return next(new HttpErreur("Erreur accès stages"), 500);
  }
  reponse.json({
    stages: stages.map((stage) =>
      stage.toObject({ getters: true })
    ),
  });
};

const getStagesByEtudiantId = async (requete, reponse, next) => {
  const etudiantId = requete.params.etudiantId;

  let stages;
  try {
    let etudiant = await Etudiant.findById(etudiantId).populate("stages");
    stages = etudiant.stages;
    console.log(etudiant);
  } catch (err) {
    return next(
      new HttpErreur(
        "Erreur lors de la récupération des stages de l'étudiant",
        500
      )
    );
  }

  if (!stages || stages.length === 0) {
    return next(
      new HttpErreur("Aucun stage trouvé pour l'utilisateur fourni", 404)
    );
  }

  reponse.json({
    stages: stages.map((stage) => stage.toObject({ getters: true })),
  });
};

const creerStage = async (requete, reponse, next) => {
  const {
    nomContact,
    courriel,
    nomEntreprise,
    adresse,
    typeStage,
    nbPostDispo,
    description,
    remuneration,
  } = requete.body;
  const nouveauStage = new Stage({
    nomContact,
    courriel,
    nomEntreprise,
    adresse,
    typeStage,
    nbPostDispo,
    description,
    remuneration,
  });

  try {
    await nouveauStage.save();
  } catch (err) {
    const erreur = new HttpErreur("Création du stage échoué", 500);
    return next(erreur);
  }
  reponse.status(201).json({ stage: nouveauStage });
};

const updateStage = async (requete, reponse, next) => {
  const { remuneration, description } = requete.body;
  const stageId = requete.params.stageId;

  let stage;

  try {
    stage = await Stage.findById(stageId);
    stage.remuneration = remuneration;
    stage.description = description;
    await stage.save();
  } catch {
    return next(new HttpErreur("Erreur lors de la mise à jour du stage", 500));
  }

  reponse.status(200).json({ stage: stage.toObject({ getters: true }) });
};

const supprimerStage = async (requete, reponse, next) => {
    const stageId = requete.params.stageId;
    let stage;
    try {
      stage = await Stage.findById(stageId);
    } catch {
      return next(
        new HttpErreur("Erreur lors de la suppression du stage", 500)
      );
    }
    if(!stage){
      return next(new HttpErreur("Impossible de trouver le stage", 404));
    }
  
    try{
      await stage.deleteOne({id: stageId})
    }catch{
      return next(
        new HttpErreur("Erreur lors de la suppression du stage", 500)
      );
    }
    reponse.status(200).json({ message: "Stage supprimé" });
  };

  exports.getStageById = getStageById;
  exports.getStages = getStages;
  exports.getStagesByEtudiantId = getStagesByEtudiantId;
  exports.creerStage = creerStage;
  exports.updateStage = updateStage;
  exports.supprimerStage = supprimerStage;
