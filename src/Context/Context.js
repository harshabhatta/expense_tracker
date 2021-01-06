import React, { useReducer } from 'react';
import contextReducer from './contextReducer';

const initialState = [];

export const ExpenseTrackerContext = React.createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  //Action creators
  const AddTransaction = (transaction) =>
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });

  const DeleteTransaction = (id) =>
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });

  return (
    <ExpenseTrackerContext.Provider
      value={{ AddTransaction, DeleteTransaction, transactions }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
