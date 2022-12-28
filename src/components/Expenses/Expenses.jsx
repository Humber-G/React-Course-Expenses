import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from '../ExpensesFilter/ExpensesFilter';
import { useState } from 'react';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2022');

  const filterYearHandler = (pickDate) => {
    setFilterYear(pickDate);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear={filterYear} onPickFilterYear={filterYearHandler} />
      {props.items.map((expense) => (
        <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
      ))}
    </Card>
  );
}

export default Expenses;
