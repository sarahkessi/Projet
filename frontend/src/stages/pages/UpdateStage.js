import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Bouton';
import Card from '../../shared/components/UIElements/Card';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/validateurs/validateurs';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import "./StageForm.css"

const UpdateStage = () => {
  const {error, sendRequest, clearError } = useHttpClient();
  const [loadedStage, setLoadedStage] = useState();
  const stageId = useParams().stageId;
  const history = useHistory();

  const [formState, inputHandler, setFormData] = useForm(
    {
      remuneration: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    false
  );

  useEffect(() => {
    const fetchStage = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL`/stages/${stageId}`
        );
        setLoadedStage(responseData.stage);
        console.log(responseData.stage)
        setFormData(
          {
            remuneration: {
              value: responseData.stage.remuneration,
              isValid: true
            },
            description: {
              value: responseData.stage.description,
              isValid: true
            }
          },
          true
        );

      } catch (err) {}
    };
    fetchStage();
  }, [sendRequest, stageId, setFormData]);

  const stageUpdateSubmitHandler = async event => {
    event.preventDefault();
    try {
      await sendRequest(
        `http://localhost:5000/api/stages/${stageId}`,
        'PATCH',
        JSON.stringify({
          remuneration: formState.inputs.remuneration.value,
          description: formState.inputs.description.value
        }),
        {
          'Content-Type': 'application/json'
        }
      );
      history.push('/stages');
    } catch (err) {}
  };


  if (!loadedStage && !error) {
    return (
      <div className="center">
        <Card>
          <h2>Stage non trouvé</h2>
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {loadedStage && (
        <form className="stage-form" onSubmit={stageUpdateSubmitHandler}>
          <Input
            id="remuneration"
            element="input"
            type="number"
            label="Rémuneration"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Entrez une rémuneration"
            onInput={inputHandler}
            initialValue={loadedStage.remuneration}
            initialValid={true}
          />
          <Input
            id="description"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Entrez une description valide(min. 5 caractères"
            onInput={inputHandler}
            initialValue={loadedStage.description}
            initialValid={true}
          />
          <Button type="submit" disabled={!formState.isValid}>
            Mettre le stage à jour
          </Button>
        </form>
      )}
    </React.Fragment>
  );
};

export default UpdateStage;
