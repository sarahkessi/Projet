import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Bouton';
import Modal from '../../shared/components/UIElements/Modal';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import { useHttpClient } from '../../shared/hooks/http-hook';

import "./StageItem.css";

const StageItem = props => {
  const {error, sendRequest, clearError } = useHttpClient();
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/stages${props.id}`,
        'DELETE'
      );
      props.onDelete(props.id);
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Êtes-vous sûr(e) ?"
        footerClass="stage-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              Annuler
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              Supprimer
            </Button>
          </React.Fragment>
        }
      >
        <p>
          Êtes-vous sûr de vouloir supprimer ce stage? Notez que vous
          ne vouvez pas annuler la suppression.
        </p>
      </Modal>
      <li className="stage-item">
        <Card className="stage-item__content">
          <section className="section2">
          <div className="stage-item__info">
            <h2>Entreprise: {props.nomEntreprise}</h2>
            <h3>Contact: {props.nomContact}</h3>
            <h3>Courriel: {props.courriel}</h3>
            <h3>Adresse: {props.adresse}</h3>
            <h3>Type de stage: {props.typeStage}</h3>
            <h3>Nombre de post disponibles: {props.nbPostDispo}</h3>
            <p>Description: {props.description}</p>
          </div>
          <div className="stage-item__actions">
            <aside className="aside2">
              <Button to={`/stages/${props.id}`}>Modifier</Button>
              <Button danger onClick={showDeleteWarningHandler}>
                Supprimer
              </Button>
              </aside>
          </div>
          </section>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default StageItem;
