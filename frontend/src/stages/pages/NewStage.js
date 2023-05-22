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
import './StageForm.css';
import { VALIDATOR_EMAIL } from '../../shared/validateurs/validateurs';

import "./NewStage.css";

const NewStage = () => {
  const { error, sendRequest, clearError } = useHttpClient();
  const [profilChoisi, setProfil] = useState("Développement d'applications");
  const [formState, inputHandler] = useForm(
    {
      nomEntreprise: {
        value: '',
        isValid: false,
      },
      typeStage: {
        value: profilChoisi,
        isValid: true,
      },
      description: {
        value: '',
        isValid: false,
      },
      adresse: {
        value: '',
        isValid: false,
      },
      nomContact: {
        value: '',
        isValid: false,
      },
      courriel: {
        value: '',
        isValid: false,
      },

     nbPostDispo: {
        value: '',
        isValid: false,
      },
      remuneration: {
        value:'',
        isValid: false,
      }
    },
    false
  );

  const history = useHistory();

  const placeSubmitHandler  = async event =>  {
    event.preventDefault();
    console.log(formState.inputs);

    try {
      const reponseData = await sendRequest(
        "http://localhost:5000/api/stages/inscriptionStage",
        "POST",
         JSON.stringify({
          nomEntreprise: formState.inputs.nomEntreprise.value,
          nomContact: formState.inputs.nomContact.value,
          description: formState.inputs.description.value,
          adresse: formState.inputs.adresse.value,
          courriel: formState.inputs.courriel.value,
          typeStage: profilChoisi,
          nbPostDispo: formState.inputs.nbPostDispo.value,
          remuneration: formState.inputs.remuneration.value

        }),
        {
            "Content-Type": "application/json",
        },
      );

      console.log(reponseData);
     history.push("/stages");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <form className="stage-form" onSubmit={placeSubmitHandler}>
        <Input
          id="nomContact"
          element="input"
          type="text"
          label="Nom de la personne contact"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Ce champ est requis. Entrez un nom complet"
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
        <Input
          id="nomEntreprise"
          element="input"
          type="text"
          label="Nom de l'entreprise"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Ce champ est requis. Entrez le nom de l'entreprise"
          onInput={inputHandler}
        />
        <Input
          id="adresse"
          element="input"
          label="Adresse de l'entreprise"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Ce champ est requis. Entrez une adresse valide."
          onInput={inputHandler}
        />
        <label>
          Profil
          <select
          className='select-stage'
             id="typeStage"
            value={profilChoisi} // ...force the select's value to match the state variable...
            onChange={(e) => setProfil(e.target.value)}
            validators={[VALIDATOR_REQUIRE]}
          >
            <option value="Développement d'applications">Développement d'applications</option>
            <option value="Réseaux et sécurité">Réseaux et sécurité</option>
          </select>
        </label>
        <Input
          id="nbPostDispo"
          element="input"
          type="number"
          label="Nombre de post disponibles"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Ce champ est requis. Entrez le nombre de post disponibles"
          onInput={inputHandler}
        />

        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Entrez une description valide (au moins 5 caractères)."
          onInput={inputHandler}
        />

        <Input
          id="remuneration"
          element="input"
          type="number"
          label="Remuneration"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Ce champ est requis. Entrez la rémunération"
          onInput={inputHandler}
        />

        <Button type="submit" disabled={!formState.isValid}>
          Ajouter un stage
        </Button>
      </form>
    </React.Fragment>
  );
};

export default NewStage;
