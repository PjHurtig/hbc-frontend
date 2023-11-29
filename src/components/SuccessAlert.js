import React from 'react';
import { Alert } from 'react-bootstrap';
import { useSuccessMessage } from '../contexts/SuccessMessageContext';

const SuccessAlert = () => {
  const { message, show } = useSuccessMessage();

  return (
    <>
      {show && <Alert variant="success">{message}</Alert>}
    </>
  );
};

export default SuccessAlert;