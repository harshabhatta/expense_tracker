import React, { useState, useContext } from 'react';
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
import { ExpenseTrackerContext } from '../../../Context/Context';
import { v4 as uuidv4 } from 'uuid';
import DateFormat from '../../../utils/DateFormat';
import {
  incomeCategories,
  expenseCategories,
} from '../../../constants/constants';

import useStyles from './FormStyles';

const initialState = {
  type: '',
  category: '',
  amount: '',
  date: DateFormat(new Date()),
};

const Form = () => {
  const classes = useStyles();
  const [formData, setformData] = useState(initialState);
  const { AddTransaction } = useContext(ExpenseTrackerContext);

  const requiredCategories =
    formData.type === 'Income' ? incomeCategories : expenseCategories;

  const CreateTransaction = () => {
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };
    AddTransaction(transaction);
    setformData(initialState);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          ...
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id='type-label'>Type</InputLabel>
            <Select
              labelId='type-label'
              id='type-select'
              value={formData.type}
              onChange={(e) =>
                setformData({ ...formData, type: e.target.value })
              }
            >
              <MenuItem value='Income'>Income</MenuItem>
              <MenuItem value='Expense'>Expense</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id='category-label'>Category</InputLabel>
            <Select
              value={formData.category}
              labelId='category-label'
              id='category-select'
              onChange={(e) => {
                setformData({ ...formData, category: e.target.value });
              }}
            >
              {requiredCategories.map((c) => (
                <MenuItem value={c.type} key={c.type}>
                  {c.type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl>
            <InputLabel>Amount</InputLabel>
            <Input
              type='number'
              placeholder='Amount'
              value={formData.amount}
              onChange={(e) => {
                setformData({ ...formData, amount: e.target.value });
              }}
            />
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
              value={formData.date}
              onChange={(e) => {
                setformData({ ...formData, date: DateFormat(e.target.value) });
              }}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Button
        variant='outlined'
        color='primary'
        className={classes.button}
        fullWidth
        onClick={CreateTransaction}
      >
        Create
      </Button>
    </div>
  );
};

export default Form;
