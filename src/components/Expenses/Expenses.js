import React, { useState } from "react";

import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

import "./Expenses.css";

function Expenses(props) {
  const [selectedFilter, setSelectedFilter] = useState("2020");

  const changeFilterHandler = (selectedFilter) => {
    //console.log("In Expense JS");
    setSelectedFilter(selectedFilter);
  };

  const filteredItems = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedFilter;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedFilter}
          onFilterChange={changeFilterHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredItems}></ExpensesChart>
        <ExpensesList items={filteredItems} />
      </Card>
    </div>
  );
}

export default Expenses;
