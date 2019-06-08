import React, { useReducer } from "react";
import ListRender from "./components/listRender.js";
//Reducers - helps keep the code clean if we want to scale.
import listReducer from "./reducers/listReducer";
//context to allow for state management between different components
import ListContext from "./context/list-context";
//Bootstrap Styles
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './styles/Styles.css';

const App = () => {
  //Set up the State with the Users[object Object] and Integers: FooSize, BarSize, FooBarSize;
  //Hooks help out with stateful logic within components but don't do anything for
  //sharing states between components - Context solves this for us.

  //Dummy data
  const Users = [
    { ID: 12, name: "A - 12", date_joined: "01-02-2019" },
    { ID: 5, name: "B - 5", date_joined: "01-02-2019" },
    { ID: 65, name: "C - 65", date_joined: "01-02-2019" },
    { ID: 18, name: "D - 18", date_joined: "01-02-2019" },
    { ID: 10, name: "E - 10 ", date_joined: "01-02-2019" },
    { ID: 3, name: "F - 3", date_joined: "01-02-2019" },
    { ID: 9, name: "G - 9", date_joined: "01-02-2019" },
    { ID: 6, name: "H - 6", date_joined: "01-02-2019" },
    { ID: 40, name: "I - 40", date_joined: "01-02-2019" },
    { ID: 30, name: "J - 30", date_joined: "01-02-2019" },
    { ID: 15, name: "K - 15", date_joined: "01-02-2019" }
  ];
  let FooSize = 0;
  let BarSize = 0;
  let FooBarSize = 0;

  //creating our state and connecting it to our reducer
  const [state, dispatch] = useReducer(listReducer, Users);

  const removeFromList = (ID, list) => {
    list = "foo"
      ? FooSize--
      : (list = "bar" ? BarSize-- : (list = "foobar" ? FooBarSize-- : null));

    dispatch({ ID, type: "REMOVE_FROM_LIST" });
  };

  //return foo list 
const returnFoo = (state) => {
  console.log('This is the State of the Foo list', state)
  return state; 
}

//return bar list
const returnBar = (state) => {
  console.log('This is the State of the Bar list', state)
  return state; 
}

//return foobar list
const returnFooBar = (state) => {
  console.log('This is the State of the FooBar list', state)
  return state; 
}

  return (
    <Container className="Container" >
        <ListContext.Provider value={[state, dispatch]}>
        <Row>
          <Col>
            <ListRender
              checkIdValue={3}
              state={state}
              removeFromList={removeFromList}
              FooSize={FooSize}
              returnFoo={returnFoo}
            />
          </Col>

          <Col>
            <ListRender
              checkIdValue={5}
              state={state}
              removeFromList={removeFromList}
              returnBar={returnBar}
              BarSize={BarSize}
            />
          </Col>

          <Col>
            <ListRender
              checkIdValue={15}
              state={state}
              removeFromList={removeFromList}
              returnFooBar={returnFooBar}
              FooBarSize={FooBarSize}
            />
          </Col>
          </Row>
        </ListContext.Provider>
    </Container>
  );
};

export default App;
