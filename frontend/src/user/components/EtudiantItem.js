import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './EtudiantItem.css';
import Button from '../../shared/components/FormElements/Bouton';
import Modal from '../../shared/components/UIElements/Modal';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { useState } from 'react';
import StageList from '../../stages/components/StageList';
import StageItem from '../../stages/components/StageItem';
import Stages from '../../stages/pages/Stages';

const EtudiantItem = props => {
  const {error, sendRequest, clearError } = useHttpClient();
  const [showConfirmModal, setShowConfirmModal] = useState(true);

  
  const afficherStages = async () => {
    <div>
      <React.Fragment>
    <ErrorModal error={error} onClear={clearError} />
    <Modal
    show={<Stages/>}
    >
      <Stages/>
    </Modal>
    </React.Fragment>
    </div>
  };

  return (
    <React.Fragment>
    <li className="etudiant-item">
      <Card className="etudiant-item__content"  onClick={afficherStages}>
        <Link to={`/${props.id}/stages`}>
          <div className="etudiant-item__image">
            <Avatar image={props.image} alt={props.nom} />
          </div>
          <div className="etudiant-item__info">
            <h2>{props.nom}</h2>
            <h3>
              {props.numeroDA} <br/>
              {props.stages.length} {props.stages.length <  1 ? 'Stage' : 'Stages'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
    </React.Fragment>

  );
};

export default EtudiantItem;