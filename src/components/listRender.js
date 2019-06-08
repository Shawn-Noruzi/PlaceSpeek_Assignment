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
              console.log("updating FooSize: ", FooSize);

              return (
                <div
                  class="accordion"
                  key={list.ID}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <section class="accordion-item">
                    <p>Name: {list.name}</p>
                    <p>
                      Join Date:{" "}
                      {moment(list.date_joined, "MM-DD-YYYY").format(
                        "MMM Do, YY"
                      )}
                    </p>

                    <div class="accordion-item-content">
                      {isHovered ? (
                        <button
                          class="accordion button"
                          onClick={() => removeFromList(list.ID, "foo")}
                        >
                          Foo
                        </button>
                      ) : null}
                    </div>
                  </section>
                </div>
              );
            })
        : checkIdValue === 5
        ? state
            .filter(list => list.ID % 3 !== 0 && list.ID % 5 === 0)
            .map(list => {
              BarSize++;

              return (
                <div
                  class="accordion"
                  key={list.ID}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <section class="accordion-item">
                    <p>Name: {list.name}</p>
                    <p>
                      Join Date:{" "}
                      {moment(list.date_joined, "MM-DD-YYYY").format(
                        "MMM Do, YY"
                      )}
                    </p>

                    <div class="accordion-item-content">
                      {isHovered ? (
                        <button
                          class="accordion button"
                          onClick={() => removeFromList(list.ID, "bar")}
                        >
                          Bar
                        </button>
                      ) : null}
                    </div>
                  </section>
                </div>
              );
            })
        : checkIdValue === 15
        ? state
            .filter(list => list.ID % 3 === 0 && list.ID % 5 === 0)
            .map(list => {
              FooBarSize++;

              return (
                <div
                  class="accordion"
                  key={list.ID}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <section class="accordion-item">
                    <p>Name: {list.name}</p>
                    <p>
                      Join Date:{" "}
                      {moment(list.date_joined, "MM-DD-YYYY").format(
                        "MMM Do, YY"
                      )}
                    </p>

                    <div class="accordion-item-content">
                      {isHovered ? (
                        <button
                          class="accordion button"
                          onClick={() => removeFromList(list.ID, "foobar")}
                        >
                          FooBar
                        </button>
                      ) : null}
                    </div>
                  </section>
                </div>
              );
            })
        : null}
    </div>
  );
};

export { ListRender as default };
