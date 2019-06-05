import React from "react";
import "./styles/App.css";
import ListRender from "./components/listRender.js";

function App() {
  const Users = [
    { ID: 3, name: "A", date_joined: "01-02-2019" },
    { ID: 5, name: "B", date_joined: "01-02-2019" },
    { ID: 15, name: "C", date_joined: "01-02-2019" }
  ];
let FooSize, FooBarSize, BarSize;
  return (
    <div className="App">
      <ListRender props={Users} FooSize={FooSize} FooBarSize={FooBarSize} BarSize={BarSize}  />
    </div>
  );
}

export default App;
