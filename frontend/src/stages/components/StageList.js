import React from 'react';
import { useState } from 'react';
import { filter } from 'async';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Bouton';
import StageItem from './StageItem';
import './StageList.css';


const StageList = props => {
  const [profilChoisi, setProfil] = useState("");
  if (props.items.length === 0) {
    return (
      <div className="stage-list center">
        <Card>
          <h2>Aucune stage trouvé</h2>
          <Button to="/stages/nouveau">Ajouter un stage</Button>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <label className='label-tri'>
        Profil:
        <select className="tri"
          value={profilChoisi}
          id="typeStage"
          onChange={(e) => setProfil(e.target.value)}
        >
          <option value="Développement d'applications">
            Développement d'applications
          </option>
          <option value="Réseaux et sécurité">Réseaux et sécurité</option>
        </select>
      </label>

      <ul className="stage-list">
        {
        (profilChoisi.includes("Réseaux")) ? (
        props.items
          .filter((stage) => stage.typeStage.includes("Réseaux"))
          .map((stage) => (
            <StageItem
              key={stage.id}
              id={stage.id}
              nomEntreprise={stage.nomEntreprise}
              nomContact={stage.nomContact}
              courriel={stage.courriel}
              description={stage.description}
              adresse={stage.adresse}
              typeStage={stage.typeStage}
              nbPostDispo={stage.nbPostDispo}
              onDelete={props.onDeleteStage}
            />
          ))
        ) : (
          props.items
          .filter((stage) => stage.typeStage.includes("Développement"))
          .map((stage) => (
            <StageItem
              key={stage.id}
              id={stage.id}
              nomEntreprise={stage.nomEntreprise}
              nomContact={stage.nomContact}
              courriel={stage.courriel}
              description={stage.description}
              adresse={stage.adresse}
              typeStage={stage.typeStage}
              nbPostDispo={stage.nbPostDispo}
              onDelete={props.onDeleteStage}
            />
          ))

        )}
        </ul>
    </div>
   
  );
};

export default StageList;
