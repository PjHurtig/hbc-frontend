// adds successmessage context to the whole app to render regardless of url

import React, { useState, createContext, useContext } from 'react';

const SuccessMessageContext = createContext();

export const useSuccessMessage = () => useContext(SuccessMessageContext);

export const SuccessMessageProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const triggerSuccessMessage = (msg) => {
    setMessage(msg);
    setShow(true);
    setTimeout(() => setShow(false), 3000);
  };

  return (
    <SuccessMessageContext.Provider 
      value={{ message, show, triggerSuccessMessage }}
    >
      {children}
    </SuccessMessageContext.Provider>
  );
};
