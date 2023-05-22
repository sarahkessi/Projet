const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const etudiantSchema = new Schema ({
    numeroDA:{type: String, required: true, unique: true},
    nom:{type: String, required: true},
    courriel:{type: String, required: true, unique: true},
    profil: {type: String, required: true},
    stages: [{type: mongoose.Types.ObjectId, ref:"Stage"}],
});

module.exports = mongoose.model("Etudiant", etudiantSchema);