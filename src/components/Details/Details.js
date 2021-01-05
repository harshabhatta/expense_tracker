import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import useStyles from './DetailsStyles';

export const Details = ({ title }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={title === 'Income' ? classes.income : classes.expense}>
        <CardContent>
          <Typography variant='h6' color='textPrimary'>
            {title}
          </Typography>
          <Typography variant='h6' color='textSecondary'>
            $50
          </Typography>
        </CardContent>
        <CardContent></CardContent>
      </Card>
    </div>
  );
};

export default Details;
