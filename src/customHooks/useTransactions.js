import { useContext } from 'react';
import { ExpenseTrackerContext } from '../Context/Context';
import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from '../constants/constants';

const useTransactions = (type) => {
  const { transactions } = useContext(ExpenseTrackerContext);

  // extract transactions based on type -> income/expense
  const typeTransactions = transactions.filter((t) => t.type === type);
  // calculate the total amount of type
  const typeTotal = typeTransactions.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  // sum up the amounts to individual constant categories
  resetCategories();
  const selectedCategories =
    type === 'Income' ? incomeCategories : expenseCategories;
  typeTransactions.forEach((t) => {
    const category = selectedCategories.find((c) => c.type === t.category);
    if (category) {
      category.amount += t.amount;
    }
  });
  const requiredTransactions = selectedCategories.filter((s) => s.amount > 0);
  // setup react-chartJs doughnut data
  const doughnutData = {
    datasets: [
      {
        data: requiredTransactions.map((t) => t.amount),
        backgroundColor: requiredTransactions.map((t) => t.color),
      },
    ],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: requiredTransactions.map((t) => t.type),
  };
  return { typeTotal, doughnutData };
};

export default useTransactions;
