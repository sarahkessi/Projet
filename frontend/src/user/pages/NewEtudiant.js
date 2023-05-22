import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Bouton';
import ErrorModal from "../../shared/components/UIElements/ErrorModal"
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/validateurs/validateurs';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { VALIDATOR_EMAIL } from '../../shared/validateurs/validateurs';

import "./EtudiantForm.css";

const NewEtudiant = () => {
  const { error, sendRequest, clearError } = useHttpClient();
  const [profilSelectionne, setProfil2] = useState("Développement d'applications");
  const [formState, inputHandler] = useForm(
    {
      numeroDA: {
        value: '',
        isValid: false,
      },
      profil: {
        value: profilSelectionne,
        isValid: true,
      },
      nom: {
        value: '',
        isValid: false,
      },
      courriel: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const history = useHistory();

  const etudiantSubmitHandler = async event =>  {
    event.preventDefault();
    console.log(formState.inputs);

    try {
      const reponseData = await sendRequest(
        "http://localhost:5000/api/etudiants/inscription",
        "POST",
         JSON.stringify({
          numeroDA: formState.inputs.numeroDA.value,
          nom: formState.inputs.nom.value,
          courriel: formState.inputs.courriel.value,
          profil: profilSelectionne,
        }),
        {
            "Content-Type": "application/json",
        },
      );

      console.log(reponseData);
     //history.push("/etudiants");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <form className="etudiant-form" onSubmit={etudiantSubmitHandler}>
        <Input
          id="numeroDA"
          element="input"
          type="text"
          label="Numéro d'admission"
          validators={[VALIDATOR_MINLENGTH(7)]}
          errorText="Entrez un numéro d'admission à 7 chiffres valide"
          onInput={inputHandler}
        />
        <Input
          id="nom"
          element="input"
          type="text"
          label="Nom complet"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Ce champ est requis. Entrez le nom de l'étudiant"
          onInput={inputHandler}
        />
        <Input
          id="courriel"
          element="input"
          type="email"
          label="Courriel de la personne contact"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Entrez un email valide."
          onInput={inputHandler}
        />
        <label>
          Profil
          <select className="profil-tri"
             id="profil"
            value={profilSelectionne}
            onChange={(e) => setProfil2(e.target.value)}
            validators={[VALIDATOR_REQUIRE]}
          >
            <option value="Développement d'applications">Développement d'applications</option>
            <option value="Réseaux et sécurité">Réseaux et sécurité</option>
          </select>
        </label>

        <Button type="submit" disabled={!formState.isValid}>
          Ajouter l'étudiant
        </Button>
      </form>
    </React.Fragment>
  );
};

export default NewEtudiant;
