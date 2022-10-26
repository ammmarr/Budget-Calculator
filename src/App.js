import React, { Component } from "react";
import OutputComponents from "./components/OutputComponents";
import { useState } from "react";

export default function App() {
  // this is the states section
  const [input, setInput] = useState({
    id: Math.floor(Math.random() * 100000),
    name: "",
    cost: "0",
  });
  const [budget, setBudget] = useState("");
  const [components, setComponents] = useState([]);

  function handleChangeName(e) {
    setInput((prev) => ({ ...prev, name: e.target.value }));
  }
  function handleChangeCost(e) {
    setInput((prev) => ({ ...prev, cost: e.target.value }));
  }
  function handleChangeBudget(e) {
    setBudget(e.target.value);
  }
  function addComponent(e) {
    e.preventDefault();
    setComponents((prev) => [...prev, input]);
    setInput({
      id: Math.floor(Math.random() * 100000),
      name: "",
      cost: "0",
    });
  }
  function deletecomp(id) {
    const updated = [...components].filter((comp) => comp.id !== id);
    setComponents(updated);
  }
  var totalCost = 0;
  for (let i = 0; i < components.length; i++) {
    totalCost += parseInt(components[i].cost);
  }
  var remaining = budget - totalCost;
  var percentage = Math.floor((remaining / budget) * 100);

  var remaining = budget - totalCost;

  var eachComponent = components.map((component) => (
    <div key={component.id} onClick={() => deletecomp(component.id)}>
      <OutputComponents
        name={component.name}
        cost={component.cost}
        budget={component.budget}
        id={component.id}
      />
    </div>
  ));

  return (
    <div className="app">
      <h1>BUDGET CALCULATOR</h1>
      <div className="card">
        <div className="info">
          <h3>remaining amount :{remaining}</h3>
          <h3>Remaining percentage : {percentage}</h3>
          <h3>Total cost : {totalCost}</h3>
        </div>
        <div className="budget-input-container">
          <input
            className="budget-input input"
            placeholder="budget"
            value={budget}
            onChange={handleChangeBudget}
            type="number"
            required
          ></input>
        </div>
        <form className="input-container" onSubmit={addComponent}>
          <input
            className="input"
            type="text"
            onChange={handleChangeName}
            value={input.name}
            placeholder="Name of Cost"
            required
          />
          <input
            className="input"
            type="number"
            onChange={handleChangeCost}
            value={input.cost}
            placeholder="Cost"
            required
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="output-component-container">{eachComponent}</div>
    </div>
  );
}
