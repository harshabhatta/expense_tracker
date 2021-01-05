import React from 'react';
import {
  Grid,
  Button,
  Select,
  TextField,
  FormControl,
  InputLabel,
  Input,
  MenuItem,
} from '@material-ui/core';

import useStyles from './FormStyles';

const Form = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          ...
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id='type-label'>Type</InputLabel>
            <Select value='type' labelId='type-label' id='type-select'>
              <MenuItem value='income'>Income</MenuItem>
              <MenuItem value='expense'>Expense</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id='category-label'>Category</InputLabel>
            <Select
              value='category'
              labelId='category-label'
              id='category-select'
            >
              <MenuItem value='business'>Business</MenuItem>
              <MenuItem value='pets'>Pets</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl>
            <InputLabel>Amount</InputLabel>
            <Input type='number' placeholder='Amount'></Input>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <TextField
              id='date'
              label='Date'
              type='date'
              InputLabelProps={{
                shrink: true,
              }}
              style={{ width: '90%' }}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Button
        variant='outlined'
        color='primary'
        className={classes.button}
        fullWidth
      >
        Create
      </Button>
    </div>
  );
};

export default Form;
