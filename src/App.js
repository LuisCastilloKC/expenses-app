import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  
  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses) =>{
      return [expense, ...prevExpenses]
    })
  }
   // this is how React work under the hood, the code after this block of code is the same thing as this one
          // return React.createElement('div', {}, 
          // React.createElement('h2', {}, "Lets get started!"),
          // React.createElement(Expenses, { items: expenses })
          // );
 // Latest React Syntax how React work, the code above so the something but thats how it work in a deep way 
          // return (
          //   <div>
          //     <h2> Let's get started!</h2>
          //     <Expenses items={expenses}/>
          //   </div>
          // );
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
