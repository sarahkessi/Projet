import React from "react";
import "./Accueil.css";

function Accueil() {
  return (
    <div>
        <html>
      <title>Stages de fin d'études - Collège Montmorency</title>
      <body>

      <main>
        <section className="section">
          <article className="article">
            <h2>Édition 2023</h2>
            <p>
              Bienvenue sur le site des stages de fin d'études des techniques de
              l'informatique du Collège Montmorency !
            </p>
            <p>
              À la fin de leurs études, les étudiants sont appelés à mettre en
              pratique les compétences acquises durant le programme. Cela se
              fait grâce à la participation d'entreprises de la région qui les
              accueillent afin de finaliser leurs formations.
            </p>
            <p>
              Le Collège Montmorency offre ainsi aux employeurs l'occasion
              d'obtenir une main-d'œuvre compétente, tout en leur permettant de
              participer à la formation finale des étudiants.
            </p>
            <p>
              Le stage de fin d'études est une expérience concrète permettant
              d'acquérir une expérience professionnelle formatrice.
            </p>
            <p>
              Les étudiants terminent la portion académique de leurs études en
              informatique selon une des deux voies de sortie du programme:
            </p>
            <ul>
              <li>Réseaux et sécurité informatique</li>
              <li>Développement d'applications informatiques</li>
            </ul>
          </article>
          <aside className="aside"> 
            <figure>
              <img
                src="https://larbrisseau.com/wp-content/uploads/2021/09/informatique.png"
                alt="informatique"
                style={{width: "300px"}}
              />
            </figure>
          </aside>
        </section>
      </main>
      </body>
      </html>
    </div>
  );
}

export default Accueil;
