import React, { useContext } from 'react';
import { Card, CardContent, Typography, Divider } from '@material-ui/core';

import useStyles from './MainStyles';
import Form from './Form/Form';
import DetailsList from './DetailsList/DetailsList';

import { ExpenseTrackerContext } from '../../Context/Context';

function Main() {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);
  return (
    <div>
      <Card>
        <CardContent className={classes.cardContent}>
          <Typography color='textPrimary' variant='h6'>
            Expense Tracker
          </Typography>
        </CardContent>
        <CardContent className={classes.cardContent}>
          <Typography color='textPrimary' variant='h6' align='center'>
            Total Balance ₹{balance}
          </Typography>
          <Typography
            color='textSecondary'
            align='center'
            variant='subtitle2'
            style={{ fontSize: '12px' }}
          >
            Say: Add Expense of 2000 rupees of category Travel on next Wednesday
          </Typography>
        </CardContent>
        <Divider className={classes.divider} />
        <CardContent className={classes.cardContent}>
          <Form />
        </CardContent>
        <CardContent className={classes.cardContent}>
          <DetailsList />
        </CardContent>
      </Card>
    </div>
  );
}

export default Main;
