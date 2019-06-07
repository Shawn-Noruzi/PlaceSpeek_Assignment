import React, { useState } from "react";
import moment from "moment";

const ListRender = ({
  state,
  removeFromList,
  checkIdValue,
  FooSize,
  BarSize,
  FooBarSize
}) => {
  const [isHovered, setHovered] = useState(false);


  return (
    <div>
      {checkIdValue === 3
        ? state
            .sort((a, b) => a.ID - b.ID)
            .filter(list => list.ID % 3 === 0 && list.ID % 5 !== 0)
            .map(list => {
              FooSize++;
              
              return (
                <div key={list.ID} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                  <p>Name: ${list.name}</p>
                  <p>
                    Join Date:{" "}
                    {moment(list.date_joined, "MM-DD-YYYY").format(
                      "MMM Do, YY"
                    )}
                  </p>
                  {isHovered ? <button onClick={() => removeFromList(list.ID, 'food')}>Remove</button>:null }
                </div>
              );
            })
        : checkIdValue === 5
        ? state
            .filter(list => list.ID % 3 !== 0 && list.ID % 5 === 0)
            .map(list => {
              BarSize++;
              console.log('Adding to Bar!', BarSize)

              return (
                <div key={list.ID} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                  <p>Name: ${list.name}</p>
                  <p>
                    Join Date:{" "}
                    {moment(list.date_joined, "MM-DD-YYYY").format(
                      "MMM Do, YY"
                    )}
                  </p>
                  {isHovered ? <button onClick={() => removeFromList(list.ID, 'bar')}>Remove</button>:null }
                </div>
              );
            })
        : checkIdValue === 15
        ? state
            .filter(list => list.ID % 3 === 0 && list.ID % 5 === 0)
            .map(list => {
              FooBarSize++;
              return (
                <div key={list.ID} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                  <p>Name: ${list.name}</p>
                  <p>
                    Join Date:{" "}
                    {moment(list.date_joined, "MM-DD-YYYY").format(
                      "MMM Do, YY"
                    )}
                  </p>
                  {isHovered ? <button onClick={() => removeFromList(list.ID, 'foobar')}>Remove</button>:null }
                </div>
              );
            })
        : null}
    </div>
  );
};

export { ListRender as default };
