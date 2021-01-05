import React from 'react';
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

import useStyles from './DetailsListStyles';

const descriptions = [
  {
    id: 1,
    type: 'Income',
    category: 'Salary',
    amount: 200,
    date: '24 Dec 2020',
  },
  { id: 2, type: 'Expense', category: 'Pets', amount: 20, date: '26 Dec 2020' },
  {
    id: 3,
    type: 'Income',
    category: 'Business',
    amount: 2000,
    date: '24 Dec 2020',
  },
];

const DetailsList = () => {
  const classes = useStyles();
  return (
    <div>
      <List className={classes.list}>
        {descriptions.map((description) => {
          return (
            <ListItem key={description.id}>
              <ListItemAvatar>
                <Avatar
                  className={
                    description.type === 'Income'
                      ? classes.avatarIncome
                      : classes.avatarExpense
                  }
                >
                  <MoneyOffIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={description.category}
                secondary={`$${description.amount} - ${description.date}`}
              />
              <ListItemSecondaryAction>
                <IconButton edge='end' aria-label='delete'>
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
