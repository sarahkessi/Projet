import React from "react";
import "./FAQ.css";

function FAQ() {
  return (
    <div>
      <h3 class="titre-FAQ">Foire aux questions - FAQ</h3>
      <section>
        <article>
        <p>> Est-ce que le stage est obligatoire ?<br/>
          Le stage de fin d'études en informatique est obligatoire pour
          l'obtention du diplôme collégial.
        </p>

        <p>> Quel est l'horaire de l'étudiant durant les stages ?<br/>
          L'étudiant doit respecter l'horaire de l'entreprise durant son stage.
        </p>

        <p>
          > Est-ce que l'étudiant travaille pendant les journées pédagogiques et
          les journées de rattrapage ?<br/>
          L'étudiant doit respecter l'horaire de l'entreprise durant son stage
          et ce même durant les journées pédagogiques et de rattrapage.
        </p>

        <p>> Quelle est la durée d'un stage de fin d'études ?<br/>
          La durée du stage est de 15 semaines pour les deux profils de sortie
          (réseaux et programmation).
        </p>

        <p>> Quelles sont les dates prévues pour les stages ?<br/>
        Les stages sont prévus du x janvier au y mai 2024.</p>
        </article>
        <aside>
            <figure>
              <img
                src="https://cdn-icons-png.flaticon.com/512/5726/5726716.png"
                alt="informatique"
                style={{width: "300px"}}
              />
            </figure>
          </aside>
          </section>
    </div>
  );
}

export default FAQ;
