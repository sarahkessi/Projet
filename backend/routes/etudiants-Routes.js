const express = require("express");

const controleursEtudiants = require("../controllers/etudiants-controleurs")
const router = express.Router();

router.get("/", controleursEtudiants.getEtudiants);
router.post("/inscription", controleursEtudiants.inscription);
router.post("/connexion", controleursEtudiants.connexion);

module.exports = router;