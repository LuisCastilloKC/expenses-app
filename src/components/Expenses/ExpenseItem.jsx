import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
    /*
    We use state when ever we need to change data in the UI
    state is separated on a per component instance basis
    Why do we use const with useState?
    useState() function manage the value somewhere else and it never assign value on the first variable (title)
    How do we get the latest value from title?
    The component function is re-executed when the State is updated and the line where we have useState()
    is also executed again when ever the component function is executed again
    
                         **** THIS IS HOW STATE WORK UNDER THE HOOD *****
    The component function execute depending how many component we have declare in the application and every time the component
    execute it count as the first time with the old value and this is why const start with the value that is giving the first time.
    this mean if the component 5 times the useState see it as the first time every time it render. this is why it never assign a new value
    
    State add reactivity to our application 
    */
  // const [title, setTitle] = useState(props.title);

  // console.log("Evaluated by React");

  // const clickHandler = () => {
  //   setTitle("Updated!");
  //   console.log(title);
  // };

  return (
    <li> 
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
    </li>
  );
}

export default ExpenseItem;
