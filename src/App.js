import React, { useState, useReducer } from "react";
import "./styles/App.css";
import ListRender from "./components/listRender.js";
//Reducers - helps keep the code clean if we want to scale.
import listReducer from "./reducers/listReducer";
//context to allow for state management between different components
import ListContext from "./context/list-context";

const App = () => {
  //Set up the State with the Users[object Object] and Integers: FooSize, BarSize, FooBarSize;
  //Hooks help out with stateful logic within components but don't do anything for
  //sharing states between components - Context solves this for us.
  const Users = [
    { ID: 3, name: "A - 3", date_joined: "01-02-2019" },
    { ID: 5, name: "B - 5", date_joined: "01-02-2019" },
    { ID: 15, name: "C - 15", date_joined: "01-02-2019" },
    { ID: 12, name: "D - 12", date_joined: "01-02-2019" },
    { ID: 10, name: "E - 10 ", date_joined: "01-02-2019" },
    { ID: 30, name: "C - 30", date_joined: "01-02-2019" }
  ];
  let integers = [{ FooSize: 0 }, { FooBarSize: 0 }, { BarSize: 0 }];

  const [state, dispatch] = useReducer(listReducer, Users);
  const [sizes, changeSize] = useState(integers);

  const removeFromList = ID => {
    dispatch({ type: "REMOVE_FROM_LIST", ID });
  };

  return (
    <div className="App">
      <ListContext.Provider value={{ state, dispatch, sizes, changeSize }}>
        <ListRender
          checkIdValue={3}
          state={state}
          sizes={sizes}
          removeFromList={removeFromList}
        />
        <ListRender
          checkIdValue={5}
          state={state}
          sizes={sizes}
          removeFromList={removeFromList}
        />
        <ListRender
          checkIdValue={15}
          state={state}
          sizes={sizes}
          removeFromList={removeFromList}
        />
      </ListContext.Provider>
    </div>
  );
};

export default App;
