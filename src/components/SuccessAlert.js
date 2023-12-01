import React from 'react';
import { Alert } from 'react-bootstrap';
import { useSuccessMessage } from '../contexts/SuccessMessageContext';

// alerts the user with a successmessage upon successful action
const SuccessAlert = () => {
  const { message, show } = useSuccessMessage();

  return (
    <>
      {show && <Alert variant="success">{message}</Alert>}
    </>
  );
};

export default SuccessAlert;