import React, { useState } from 'react';
import './App.css';
import Bar from './Bar.js';
import $, { data } from 'jquery'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Pie} from 'react-chartjs-2';


var currentUser = "David";

var roommateAmounts = { "David": 100, "Blake": 100, "Rob": 100 };

var expenses = [
    {"description":"groceries", "cost": 100, "roommate":"David"},  
    {"description":"groceries", "cost": 100, "roommate":"Blake"},
    {"description":"groceries", "cost": 100, "roommate":"Rob"},  
];

var shoppingLists = [
  {"name" : "Groceries", "list" : [
    {"item": "Eggs", "cost" : ""},
    {"item": "Ham", "cost" : ""},
    {"item": "Milk", "cost" : ""},
    {"item": "Chicken", "cost" : ""}
  ]},
  {"name" : "Wishlist", "list" : [
    {"item": "New Toaster", "cost" : 50.00},
    {"item": "4k TV", "cost" : 350.00}
  ]}
]

var total = Object.values(roommateAmounts).reduce((accumulator, num) => accumulator + num);

var budget = 1000;

function App() {
  return (
    <div className="App">
      <header>
        <Router>
        <div className="nav">
            <Link className="nav-link" to={'/Fair-Share/'}><div className="nav-text">Home</div></Link>
            <Link className="nav-link" to={'/Fair-Share/shopping/'}><div className="nav-text">Shopping</div></Link>
            <Link className="nav-link" to={'/Fair-Share/payments/'}><div className="nav-text">Payments</div></Link>
        </div>
          <Switch>
            <Route path='/Fair-Share/' exact component={Home} />
            <Route path='/Fair-Share/payments' component={Payments} />
            <Route path='/Fair-Share/shopping' component={Shopping} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

function Home() {
  
  const [amounts, setAmounts] = useState({ "David": 100, "Blake": 100, "Rob": 100 });
  const [bodge, setBodge] = useState(100);

  total = Object.values(roommateAmounts).reduce((accumulator, num) => accumulator + num);
  var pieData = {
    labels: Object.keys(roommateAmounts),
    datasets: [{
        label: 'Spending',
        data: Object.values(roommateAmounts),
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
  }

  
const barData = {
  labels: ["Money Spent"],
  datasets: [{
    label: 'My First Dataset',
    data: [65],
    backgroundColor: ['rgba(75, 192, 192, 0.2)'],
    borderColor: ['rgb(75, 192, 192)'],
    borderWidth: 1
  }]
};

  function addExpenseClicked() {
    document.getElementById("expenseForm").style.visibility="visible";
  }

  function balanceClicked() {
    var message = "David owes Rob X\nBlake owes Rob Y\n*UNDER DEVELOPMENT*\nPlease pay each other accordingly and press OK, if you cannot pay at the moment, press Cancel";
    if(window.confirm(message)) {
      roommateAmounts["David"] = total/3;
      roommateAmounts["Blake"] = total/3;
      roommateAmounts["Rob"] = total/3;

      setBodge(bodge + 1);
    }
  }

  function addExpense() {
      var input = $('#expenseForm').serializeArray();
      
      console.log(input);

      if(isNaN(parseFloat(input[1]["value"]))) {
        alert("Please enter a valid number");
      } else {
        document.getElementById('expenseForm').reset();
      
        var newAmounts = roommateAmounts;
        newAmounts[currentUser] = roommateAmounts[currentUser] + parseFloat(input[1]["value"]);

        expenses.push({"description":input[0]["value"], "cost": parseFloat(input[1]["value"]), "roommate":currentUser});

        console.log(newAmounts);
        roommateAmounts = newAmounts;
        setBodge(bodge + 1);

        document.getElementById("expenseForm").style.visibility="hidden";
        console.log("in addexpense");
      }
      
  }

  function setBudgetClicked() {
    document.getElementById("budgetForm").style.visibility="visible";
  }

  function setBudget() {
    var input = $('#budgetForm').serializeArray();
      
    console.log(input);

    var newBudget = parseFloat(input[0]["value"]);

    if(isNaN(newBudget)) {
      alert("Please enter a valid number");
    } else {
      var form = document.getElementById('budgetForm');
      form.reset();
    
      budget = newBudget;

      setBodge(bodge + 1);

      form.style.visibility="hidden";
      console.log("in setBudget");
    }
  }

  return(
    <div className="home">
    <div className="left-cols">
      <div className="spending col">
          <div className="chart-container">
              <Pie data={pieData}/>
          </div>
          <button className="balance-button" onClick={balanceClicked}>Balance</button>
          <div className="balance-tab" id="balanceConfirmation"></div>
      </div>
      <div className="add-expense col">
          <button className="add-expense-div" onClick={addExpenseClicked}>Add Expense</button>
          <form id="expenseForm" className="hidden-form">
              <div className="add-expense-div">
                <label for="description">Description: </label>
                <input required type="text" name="description" id="description"/>
              </div>
              
              <div className="add-expense-div">
                <label for="cost" style={{"margin-left": "40px"}}>Cost: $</label>
                <input required type="number" placeholder="1.00" step="0.01" name="cost" id="cost"/>
              </div>
              <button type="button" className="add-expense-div" onClick={addExpense}>Add</button>
          </form>
      </div>
    </div>
    <div className="budget col">
      <Bar avg={total} max={budget} min={0}/>
      <button className="set-budget" onClick={setBudgetClicked}>Set Budget</button>
      <form id="budgetForm" className="hidden-form">
        <div className="add-expense-div">
          <label for="description">New Budget: </label>
          $<input required type="text" name="description" id="description"/>
        </div>
        <button type="button" className="add-expense-div" onClick={setBudget}>Confirm</button>
      </form>
    </div>
    </div>

  );
}

function Shopping() {

  const [bodge, setBodge] = useState(0);

  total = Object.values(roommateAmounts).reduce((accumulator, num) => accumulator + num);

  console.log(shoppingLists);

  function removeItem(listIndex, itemIndex) {
    shoppingLists[listIndex].list.splice(itemIndex,1);

    setBodge(bodge + 1);
  }

  function addClicked(listIndex) {
    document.getElementById("form" +listIndex).style.visibility="visible";
  }

  function addItem(listIndex) {
    var input = $("#form" + listIndex).serializeArray();  
    
    console.log(input);

    document.getElementById("form" + listIndex).reset();
  
    shoppingLists[listIndex].list.push({"item" : input[0]['value'], "cost" : input[1]['value']});

    setBodge(bodge + 1);
    console.log("in addItem");
    
    document.getElementById("form" +listIndex).style.visibility="hidden";

  }

  function addListClicked(listIndex) {
    document.getElementById("addListForm").style.visibility="visible";
  }

  function addList() {
    var input = $("#addListForm").serializeArray();  
    
    console.log(input);
    var form = document.getElementById("addListForm");
    if(form) {
      form.reset();
    
      shoppingLists.push({"name" : input[0]["value"], "list" : []});

      setBodge(bodge + 1);
      console.log("in addItem");
      
      form.style.visibility="hidden";
    }
      
  }

  return( 
  <div className="shopping">
    <h1 className="shopping-title">Shopping Lists</h1>
    <h2>Budget Left: ${budget-total}</h2>
    Press the checkbox to remove an item
    <div className='shopping-lists'>
      {shoppingLists.map((list,listIndex) => ( 
        <div className="shopping-list">
          <h3 className="list-name">{list["name"]}</h3>
          <div className="list-items">
            {list["list"].map((item,itemIndex) => (
              <div className="list-item">
                <input type="checkbox" className="remove-item-button" onClick={() =>  removeItem(listIndex, itemIndex)}></input>
                <text className="item-name">{item['item']} {console.log(isNaN(item['cost']))}</text> 
                <text className="item-cost">{(item['cost'].length == 0 || isNaN(item['cost'])) ? "" : ("$" + item['cost'])} {console.log(item['cost'])}</text> 
              </div>
            ))}
            <button className="add-item" onClick={()=>addClicked(listIndex)}>+</button>
            <form id={"form" + listIndex} className="hidden-form">
              <div>
                <label for="description">Item: </label>
                <input required type="text" name="description" id="description"/>
              </div>
              
              <div>
                <label for="cost">Cost: $</label>
                <input type="number" step="0.01" name="cost" id="cost"/>
              </div>

              <button className="add-expense-div" onClick={() => addItem(listIndex)}>Add Item</button>
            </form>
          </div>
        </div>
      ))}
      <div className="add-list">
        <button onClick={()=>addListClicked()}>Add List</button>
        <form id="addListForm" className="hidden-form">
          <div>
            <label for="description">Title: </label>
            <input required type="text" name="description" id="description"/>
          </div>
          <button className="add-expense-div" onClick={addList}>Add</button>
        </form>
      </div>
    </div>
  </div>
  );
}

function Payments() {

const [bodge, setBodge] = useState(0);

function removeExpense(index) {
  console.log(expenses);
  roommateAmounts[expenses[index]['roommate']] = roommateAmounts[expenses[index]['roommate']] - expenses[index]['cost']; 
  expenses.splice(index, 1);

  setBodge(bodge + 1);
}


return( 
  <div className="payments">
    <h1 className="payments-title">Expense List</h1>
    <div className='payments-list'>
      {expenses.map((expense,index) => (
        <div className="payments-item">
          <div className="payment-attributes">
            <text className="payment-attribute">Description: {expense['description']}</text> 
            <text className="payment-attribute">Cost: {expense['cost']}</text> 
            <text className="payment-attribute">Roommate: {expense['roommate']}</text> 
            <button className="remove-payment-button" onClick={() =>  removeExpense(index)}>remove</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default App;
