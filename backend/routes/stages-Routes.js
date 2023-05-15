const express = require("express");

const controleursStages = require("../controllers/stages-controleurs");
const router = express.Router();

router.get("/:stageId", controleursStages.getStageById);
router.get("/etudiant/:etudiantId", controleursStages.getStagesByEtudiantId);
router.get("/", controleursStages.getStages);
router.post("/inscriptionStage", controleursStages.inscrireStage);
router.patch("/:stageId", controleursStages.updateStage);
router.delete("/:stageId", controleursStages.supprimerStage);

module.exports = router;
