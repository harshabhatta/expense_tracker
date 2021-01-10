import React from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import useStyles from './SnackbarStyles';

const CustomizedSnackbar = ({ open, setOpen, text }) => {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={3000}
        open={open}
        onClose={handleClose}
      >
        <Alert
          severity={text === 'added' ? 'success' : 'error'}
          onClose={handleClose}
          variant='filled'
        >
          Transaction successfully {text}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomizedSnackbar;
