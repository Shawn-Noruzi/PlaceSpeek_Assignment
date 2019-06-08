import React, { useReducer } from "react";
import ListRender from "./components/listRender.js";
//Reducers - helps keep the code clean if we want to scale.
import listReducer from "./reducers/listReducer";
//context to allow for state management between different components
import ListContext from "./context/list-context";
//Styles
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './styles/Styles.css';

const App = () => {
  //Set up the State with the Users[object Object] and Integers: FooSize, BarSize, FooBarSize;
  //Hooks help out with stateful logic within components but don't do anything for
  //sharing states between components - Context solves this for us.
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

  const [state, dispatch] = useReducer(listReducer, Users);

  const removeFromList = (ID, list) => {
    list = "foo"
      ? FooSize--
      : (list = "bar" ? BarSize-- : (list = "foobar" ? FooBarSize-- : null));

    console.log("dispatcher here! im being called!");
    dispatch({ ID, type: "REMOVE_FROM_LIST" });
  };

  return (
    <Container className='Container'>
        <ListContext.Provider value={[state, dispatch]}>
        <Row>
          <Col className='Col'>
            <ListRender
              checkIdValue={3}
              state={state}
              removeFromList={removeFromList}
              FooSize={FooSize}
            />
          </Col>

          <Col className='Col'>
            <ListRender
              checkIdValue={5}
              state={state}
              removeFromList={removeFromList}
              BarSize={BarSize}
            />
          </Col>

          <Col className='Col'>
            <ListRender
              checkIdValue={15}
              state={state}
              removeFromList={removeFromList}
              FooBarSize={FooBarSize}
            />
          </Col>
          </Row>
        </ListContext.Provider>
      
    </Container>
  );
};

export default App;
