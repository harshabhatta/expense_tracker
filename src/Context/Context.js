import React, { useReducer } from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [];

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

  // calculate the sum of Income & Expense transactions
  const balance = transactions.reduce((acc, curr) => {
    return curr.type === 'Income' ? acc + curr.amount : acc - curr.amount;
  }, 0);

  return (
    <ExpenseTrackerContext.Provider
      value={{ AddTransaction, DeleteTransaction, transactions, balance }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
