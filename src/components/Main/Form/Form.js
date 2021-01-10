import React, { useState, useContext, useEffect } from 'react';
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
import { useSpeechContext } from '@speechly/react-client';
import { ExpenseTrackerContext } from '../../../Context/Context';
import { v4 as uuidv4 } from 'uuid';
import DateFormat from '../../../utils/DateFormat';
import {
  incomeCategories,
  expenseCategories,
} from '../../../constants/constants';

import useStyles from './FormStyles';
import CustomizedSnackbar from '../../Snackbar/CustomizedSnackbar';

const initialState = {
  type: '',
  category: '',
  amount: '',
  date: DateFormat(new Date()),
};

const Form = () => {
  const classes = useStyles();
  const { segment } = useSpeechContext();
  const [formData, setformData] = useState(initialState);
  const { AddTransaction } = useContext(ExpenseTrackerContext);
  const [open, setOpen] = useState(false);

  const requiredCategories =
    formData.type === 'Income' ? incomeCategories : expenseCategories;

  const CreateTransaction = () => {
    if (Number.isNaN(Number(formData.amount)) || !formData.date.includes('-'))
      return;
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };
    AddTransaction(transaction);
    setformData(initialState);
    setOpen(true);
  };

  useEffect(() => {
    if (segment) {
      // check the intent -> type of the speech
      if (segment.intent.intent === 'add_expense') {
        setformData({ ...formData, type: 'Expense' });
      } else if (segment.intent.intent === 'add_income') {
        setformData({ ...formData, type: 'Income' });
      } else if (
        segment.intent.intent === 'create_transaction' &&
        segment.isFinal
      ) {
        CreateTransaction();
      } else if (
        segment.intent.intent === 'cancel_transaction' &&
        segment.isFinal
      ) {
        setformData(initialState);
      }

      //check the entities of the speech (category, amount, date)
      segment.entities.forEach((s) => {
        let category = `${s.value.charAt(0)}${s.value.slice(1).toLowerCase()}`;
        switch (s.type) {
          case 'amount':
            setformData({ ...formData, amount: s.value });
            break;
          case 'category':
            if (incomeCategories.map((iC) => iC.type).includes(category))
              setformData({ ...formData, type: 'Income', category });
            else if (expenseCategories.map((eC) => eC.type).includes(category))
              setformData({ ...formData, type: 'Expense', category });
            break;
          case 'date':
            setformData({ ...formData, date: s.value });
            break;
          default:
            break;
        }
      });

      //create transaction once all the details are present
      if (
        segment.isFinal &&
        formData.category &&
        formData.type &&
        formData.date &&
        formData.amount
      )
        CreateTransaction();
    }
  }, [segment]);

  return (
    <div>
      <CustomizedSnackbar open={open} setOpen={setOpen} text='added' />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {segment && segment.words.map((w) => w.value).join(' ')}
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
