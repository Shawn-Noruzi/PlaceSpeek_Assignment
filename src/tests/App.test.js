import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

//Jest testing would be my preference here
//Things to test: 
/*
1. Reducer calls for removal of a component 
2. since data is static right now we can do snapshot testing for added components

*/

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
