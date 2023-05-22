import React from 'react';

import Modal from './Modal';
import Bouton from '../FormElements/Bouton';

const ErrorModal = props => {
  return (
    <Modal
      onCancel={props.onClear}
      header="Une erreur est survenue"
      show={!!props.error}
      footer={<Bouton onClick={props.onClear}>D'accord</Bouton>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;