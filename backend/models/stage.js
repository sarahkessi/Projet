const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stageSchema = new Schema ({
    nomContact:{type: String, required: true},
    courriel: {type: String, required: true},
    numeroTel: {type: String, required: true},
    nomEntreprise: {type: String, required: true},
    adresse: {type: String, required: true},
    typeStage: {type: String, required: true},
    nbPostDispo: {type: Int32Array, required: true},
    description: {type: String, required: true},
    remuneration: {type: String, required: true}
});

module.exports = mongoose.model("Stage", stageSchema);