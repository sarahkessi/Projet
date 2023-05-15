import React from "react";
import "./ProfilsCompetences.css";

function ProfilsCompetences() {
  return (
    <div>
      <section>
        <ul>
          <li>
            <a href="#Réseaux" class="liens">
              <h3 class="titres">Réseaux et sécurité</h3>
            </a>
          </li>
          <li>
            <a href="#DevApp" class="liens">
              <h3 class="titres">Développement d'applications informatiques</h3>
            </a>
          </li>
        </ul>
        <article className="article-profils">
          <a id="Réseaux">
            <h4>
              Nos étudiants en Gestion de réseaux et sécurité ont suivi des
              cours leur permettant de:
            </h4>
          </a>
          gérer des réseaux informatiques et offrir du soutien aux personnes qui
          utilisent des ordinateurs et des réseaux, c’est-à-dire:
          <ul class="liste">
            <li>monter un serveur</li>
            <li>planifier et implanter un réseau</li>
            <li>
              implanter les technologies et les services propres au réseau
              Internet
            </li>
            <li>assurer la gestion du réseau</li>
            <li>planifier et déployer des environnements virtuels</li>
            <li>
              planifier et mettre en place la sécurité des systèmes
              informatiques
            </li>
            <li>déployer les nouvelles technologies des réseaux</li>
            <li>automatiser les tâches d’administration réseaux</li>
            <li>superviser les réseaux</li>
            <li>assurer le soutien technique aux utilisateurs</li>
            <li>découvrir des nouvelles technologies</li>
          </ul>
          <br />
          connaître de façon approfondie le traitement de l’information, les
          logiciels et les composants de l’ordinateur et des périphériques tels
          que:
          <ul class="liste">
            <li>
              l’installation et la gestion des serveurs et des clients Microsoft
              et Linux
            </li>
            <li>
              la configuration, l’installation et la gestion d’un serveur Web ou
              de courrier
            </li>
            <li>le déploiement d’un système et d’une application client</li>
            <li>la mise en place de la sécurité des systèmes informatiques</li>
            <li>
              l’utilisation des techniques pour tester et sécuriser les
              équipements informatiques
            </li>
            <li>
              le déploiement des environnements virtuels et de l’infonuagique
            </li>
            <li>
              la résolution de problèmes de réseaux sur les équipements
              informatiques
            </li>
            <li>
              préparation à la certification CEH (Certified Ethical Hacker)
            </li>
          </ul>
        </article>
      </section>

      <section>
        <article className="article-profils">
          <a id="DevApp">
            <h4>
              Nos étudiant en Développement d'applications informatiques ont
              suivi des cours leur permettant de:
            </h4>
          </a>
          <ul class="liste">
            <li>participer à l’analyse des systèmes à implanter</li>
            <li>
              détecter les problèmes, en dégager la structure et trouver les
              solutions logiques
            </li>
            <li>
              effectuer les jeux d’essai et la mise au point des programmes et
              des systèmes
            </li>
            <li>
              élaborer des systèmes et participer à leur implantation ou à leur
              modification dans les entreprises programmer des objets connectés
            </li>
            <li>sécuriser les applications informatiques</li>
            <li>virtualiser des postes de travail</li>
            <li>comprendre les notions fondamentales des réseaux</li>
            <li>
              gérer les versions des fichiers sources des applications
              informatiques
            </li>
            <li>déployer des applications infonuagiques</li>
            <li>découvrir les nouvelles technologies</li>
            <li>
              connaître de façon approfondie le traitement de l’information, les
              logiciels et les composants de l’ordinateur et des périphériques
              tels que: la programmation structurée et orientée objet et Web
              dynamique
            </li>
            <li>les bases de données</li>
            <li>l’installation et la configuration de logiciels</li>
            <li>
              les composantes matérielles de l’ordinateur, leur installation et
              leur configuration
            </li>
            <li>les systèmes d’exploitation (Windows et Linux)</li>
            <li>les méthodologies Agile telles que SCRUM</li>
            <li>le développement pour plateforme mobile</li>
            <li>l’assurance qualité logiciel</li>
          </ul>
        </article>
      </section>
    </div>
  );
}

export default ProfilsCompetences;
