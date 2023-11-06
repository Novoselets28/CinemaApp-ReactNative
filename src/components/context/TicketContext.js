import React, { createContext, useContext, useReducer } from 'react';

const TicketContext = createContext();

const initialState = {
  ticket: null,
};

const ticketReducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_TICKET':
      return {
        ...state,
        ticket: action.payload,
      };
    default:
      return state;
  }
};

export const TicketProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ticketReducer, initialState);

  return (
    <TicketContext.Provider value={{ state, dispatch }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTicket = () => {
  const context = useContext(TicketContext);
  if (!context) {
    throw new Error('useTicket must be used within a TicketProvider');
  }
  return context;
};
