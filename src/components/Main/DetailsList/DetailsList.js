import React, { useContext } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import DeleteIcon from '@material-ui/icons/Delete';
import { ExpenseTrackerContext } from '../../../Context/Context';

import useStyles from './DetailsListStyles';

const DetailsList = () => {
  const classes = useStyles();
  const { DeleteTransaction, transactions } = useContext(ExpenseTrackerContext);
  return (
    <div>
      <List className={classes.list}>
        {transactions.map((transaction) => {
          return (
            <ListItem key={transaction.id}>
              <ListItemAvatar>
                <Avatar
                  className={
                    transaction.type === 'Income'
                      ? classes.avatarIncome
                      : classes.avatarExpense
                  }
                >
                  <MoneyOffIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={transaction.category}
                secondary={`$${transaction.amount} - ${transaction.date}`}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge='end'
                  aria-label='delete'
                  onClick={() => DeleteTransaction(transaction.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default DetailsList;
