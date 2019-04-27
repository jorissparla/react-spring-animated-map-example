import { useState, useRef } from "react";
import * as React from "react";
import { render } from "react-dom";
import { Card, CardSeries } from "./components/Card";
import { useTransition, animated, useChain } from "react-spring";
import "./styles.css";

const items = [
  { key: 1, id: 1, color: "black", title: "Hallo" },
  { key: 2, id: 2, color: "lightblue", title: "Xllo" },
  { key: 3, id: 3, color: "orange", title: "Blueberry" },
  { key: 4, id: 4, color: "green", title: "Sinasappel" },
  { key: 21, id: 2, color: "purple", title: "Xllo" },
  { key: 31, id: 3, color: "palevioletred", title: "Blueberry" },
  { key: 41, id: 4, color: "green", title: "Sinasappel" }
];

function App() {
  const transRef = useRef();
  const transitions = useTransition(items, item => item.key, {
    ref: transRef,
    unique: true,
    trail: 400 / items.length,

    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" }
  });

  useChain([transRef], [0.1, 0.3]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <CardSeries>
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Card color={item.color} title={item.title} />
          </animated.div>
        ))}
      </CardSeries>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
