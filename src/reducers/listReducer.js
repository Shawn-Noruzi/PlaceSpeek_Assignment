//useState for simple functions.
//useReducer for more complex functions + clean up code for resusability and managability.
const listReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_FROM_LIST":
        console.log('Im being removed!');
        console.log( state.filter(list => list.ID !== action.ID));
      return state.filter(list => list.ID !== action.ID);
    default:
      return state;
  }
};

export { listReducer as default };
