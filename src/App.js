import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './AppStyles';

import Details from './components/Details/Details';
import Main from './components/Main/Main';

import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
} from '@speechly/react-ui';

function App() {
  const classes = useStyles();
  return (
    <Grid
      className={classes.grid}
      container
      spacing={0}
      alignItems='center'
      justify='center'
      style={{ height: '100vh' }}
    >
      <Grid item xs={12} sm={4}>
        <Details title={'Income'} />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Main />
      </Grid>
      <Grid sm={4}>
        <Details title={'Expense'} />
      </Grid>
      <Grid item xs={12}>
        <PushToTalkButtonContainer>
          <PushToTalkButton />
          <ErrorPanel />
        </PushToTalkButtonContainer>
      </Grid>
    </Grid>
  );
}

export default App;
