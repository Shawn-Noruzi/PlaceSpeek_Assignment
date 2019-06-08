import React, { useState } from "react";
import moment from "moment";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../styles/Styles.css";

/*
Creates three different lists based on the value passed in for checkIdValue. 
Each list is:
1. sorted by ID (descending increasing value).
2. filtered checks the ID's in the state and gives us a Boolean for when our condition is met
3. map returns us only the ID matched items from our state. 
4. sizes for the newly generated lists are also kept in a variable (FooSize, BarSize, FooBarSize)
5. Fadein/Fadeout transitions applied to any component that gets rendered. 
6. The remove button for individual components gets shown when your mouse goes over the component. (opens with accordion styling)
*/

const ListRender = ({
  state,
  removeFromList,
  checkIdValue,
  returnFoo,
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
                //FadeOut or fadeEnter on component render
                <TransitionGroup>
                  <CSSTransition key={list.ID} timeout={600} classNames="fade">
                    <div
                      className="accordion"
                      key={list.ID}
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                    >
                      <section className="accordion-item">
                        <p>Name: {list.name}</p>
                        <p>
                          Join Date:{" "}
                          {moment(list.date_joined, "MM-DD-YYYY").format(
                            "MMM Do, YY"
                          )}
                        </p>

                        <div className="accordion-item-content">
                          {isHovered ? (
                            <button
                              className="accordion button"
                              onClick={() => removeFromList(list.ID, "foo")}
                            >
                              Foo
                            </button>
                          ) : null}
                        </div>
                      </section>
                    </div>
                  </CSSTransition>
                </TransitionGroup>
              );
            })
        : checkIdValue === 5
        ? state
            .filter(list => list.ID % 3 !== 0 && list.ID % 5 === 0)
            .map(list => {
              BarSize++;

              return (
                <TransitionGroup>
                  <CSSTransition key={list.ID} timeout={600} classNames="fade">
                    <div
                      className="accordion"
                      key={list.ID}
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                    >
                      <section className="accordion-item">
                        <p>Name: {list.name}</p>
                        <p>
                          Join Date:{" "}
                          {moment(list.date_joined, "MM-DD-YYYY").format(
                            "MMM Do, YY"
                          )}
                        </p>

                        <div className="accordion-item-content">
                          {isHovered ? (
                            <button
                              className="accordion button"
                              onClick={() => removeFromList(list.ID, "bar")}
                            >
                              Bar
                            </button>
                          ) : null}
                        </div>
                      </section>
                    </div>
                  </CSSTransition>
                </TransitionGroup>
              );
            })
        : checkIdValue === 15
        ? state
            .filter(list => list.ID % 3 === 0 && list.ID % 5 === 0)
            .map(list => {
              FooBarSize++;

              return (
                <TransitionGroup>
                  <CSSTransition key={list.ID} timeout={600} classNames="fade">
                    <div
                      className="accordion"
                      key={list.ID}
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                    >
                      <section className="accordion-item">
                        <p>Name: {list.name}</p>
                        <p>
                          Join Date:{" "}
                          {moment(list.date_joined, "MM-DD-YYYY").format(
                            "MMM Do, YY"
                          )}
                        </p>

                        <div className="accordion-item-content">
                          {isHovered ? (
                            <button
                              className="accordion button"
                              onClick={() => removeFromList(list.ID, "foobar")}
                            >
                              FooBar
                            </button>
                          ) : null}
                        </div>
                      </section>
                    </div>
                  </CSSTransition>
                </TransitionGroup>
              );
            })
        : null}
    </div>
  );
};

export { ListRender as default };
