import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../../customHooks/useTransactions';

import useStyles from './DetailsStyles';

export const Details = ({ title }) => {
  const classes = useStyles();
  const { typeTotal, doughnutData } = useTransactions(title);

  return (
    <div>
      <Card className={title === 'Income' ? classes.income : classes.expense}>
        <CardContent>
          <Typography variant='h6' color='textPrimary'>
            {title}
          </Typography>
          <Typography variant='h6' color='textSecondary'>
            {`₹${typeTotal}`}
          </Typography>
          <Doughnut data={doughnutData} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
