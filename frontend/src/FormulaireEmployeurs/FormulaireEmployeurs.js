import React from "react";
import { Link } from "react-router-dom";
import "./FormulaireEmployeurs.css";

function FormulaireEmployeurs() {
  return (
    <div>
      <section>
        <article>
          <h4 className="titres-h4">Formulaire d'inscription de milieu de stage </h4>
          <p>
            Stages réguliers ayant lieu à la session hiver. Les stages sont du x
            janvier au x mai 2024 (il est toutefois possible après entente avec
            le coordonnateur de débuter le stage un peu plus tôt) Sur réception
            de ce formulaire, le coordonnateur des stages entrera en contact
            avec le responsable en entreprise pour discuter du stage. Veuillez
            vous référez à la page <Link to="/profils">Profil de sortie</Link>{" "}
            pour connaître le profil de sortie et les compétences des étudiants.
          </p>
        </article>
      </section>
    </div>
  );
}

export default FormulaireEmployeurs;
