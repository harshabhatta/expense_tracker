import React from 'react';
import { Card, CardContent, Typography, Divider } from '@material-ui/core';

import useStyles from './MainStyles';
import Form from './Form/Form';
import DetailsList from './DetailsList/DetailsList';

function Main() {
  const classes = useStyles();
  return (
    <div>
      <Card>
        <CardContent className={classes.cardContent}>
          <Typography color='textPrimary' variant='h6'>
            Expense Tracker
          </Typography>
          <Typography
            color='textSecondary'
            variant='subtitle2'
            style={{ fontSize: '12px' }}
          >
            Powered by speechly
          </Typography>
          <Typography color='textPrimary' variant='h6' align='center'>
            Total Balance $1057
          </Typography>
          <Typography
            color='textSecondary'
            align='center'
            variant='subtitle2'
            style={{ fontSize: '12px' }}
          >
            Say the command: Add the expense of $50 for pets to thursday
          </Typography>
        </CardContent>
        {/* <CardContent className={classes.cardContent}>
          <Typography color='textPrimary' variant='h6' align='center'>
            Total Balance $1057
          </Typography>
          <Typography color='textSecondary' align='center' variant='subtitle2'>
            Say the command: Add the expense of $50 for pets to thursday
          </Typography>
        </CardContent> */}
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
