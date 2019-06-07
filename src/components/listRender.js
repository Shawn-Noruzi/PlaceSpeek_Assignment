import React from "react";
//import moment from "moment";
const ListRender = ({ state, removeFromList, sizes, checkIdValue }) => {
  console.log(state);
  console.log(sizes);
  console.log(checkIdValue);

  return (
    <div>
      {checkIdValue === 3
        ? state
            .filter(list => list.ID % 3 === 0 && list.ID % 5 !== 0)
            .map(list => (
              <div key={list.ID}>
                <p>${list.name}</p>

              </div>
            ))
        : checkIdValue === 5
        ? state
            .filter(list => list.ID % 3 !== 0 && list.ID % 5 === 0)
            .map(list => (
              <div key={list.ID}>
                <p>${list.name}</p>
                
              </div>
            ))
        : checkIdValue === 15
        ? state
            .filter(list => list.ID % 3 === 0 && list.ID % 5 === 0)
            .map(list => (
              <div key={list.ID}>
                <p>${list.name}</p>
                
              </div>
            ))
        : null}
    </div>
  );
};

export { ListRender as default };
