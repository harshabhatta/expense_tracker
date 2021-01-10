import React, { useEffect, useRef } from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './AppStyles';

import Details from './components/Details/Details';
import Main from './components/Main/Main';

import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
} from '@speechly/react-ui';

import { useSpeechContext, SpeechState } from '@speechly/react-client';

function App() {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null);

  const executeScroll = () => {
    main.current.scrollIntoView();
  };

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <Grid
      className={classes.grid}
      container
      spacing={0}
      alignItems='center'
      justify='center'
      style={{ height: '100vh' }}
    >
      <Grid item xs={12} sm={4} className={classes.mobile}>
        <Details title='Income' />
      </Grid>
      <Grid ref={main} item xs={12} sm={3} className={classes.main}>
        <Main />
      </Grid>
      <Grid item xs={12} sm={4} className={classes.desktop}>
        <Details title='Income' />
      </Grid>
      <Grid item xs={12} sm={4} className={classes.last}>
        <Details title='Expense' />
      </Grid>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '10%',
        }}
      >
        <PushToTalkButtonContainer>
          <PushToTalkButton size='4rem' />
          <ErrorPanel />
        </PushToTalkButtonContainer>
      </div>
    </Grid>
  );
}

export default App;
