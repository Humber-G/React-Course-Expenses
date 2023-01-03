import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from '../ExpensesFilter/ExpensesFilter';
import { useState } from 'react';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('showAll');

  const filterYearHandler = (pickDate) => {
    setFilterYear(pickDate);
  };

  const filteredExpenses = props.items.filter((expense) => {
    if (filterYear !== 'showAll') {
      return expense.date.getFullYear().toString() === filterYear;
    } else {
      return true;
    }
  });

  let expensesContent = <p>No expenses found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear={filterYear} onPickFilterYear={filterYearHandler} />
      {expensesContent}
    </Card>
  );
}

export default Expenses;
