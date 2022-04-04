import React, { useState } from "react";

function PropDrilling() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: "1px solid red", padding: "30px" }}>
      <button className="ui button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <h2>You clicked: {count} times</h2>
      {/* <A count={count} /> */}
    </div>
  );
}

function A({ count }) {
  return (
    <div style={{ border: "1px solid green", padding: "30px" }}>
      A Component
      <h4>AAA</h4>
      {/* <B count={count} /> */}
    </div>
  );
}

function B({ count }) {
  return (
    <div style={{ border: "1px solid blue", padding: "30px" }}>
      B Component
      <h4>BBB</h4>
      {/* <C count={count} /> */}
      {/* <D count={count} /> */}
    </div>
  );
}

function C({ count }) {
  return (
    <div style={{ border: "1px solid magenta", padding: "30px" }}>
      C component
      <h4>CCC</h4>
      <h4>Clicked: {count} times</h4>
    </div>
  );
}

function D({ count }) {
  return (
    <div style={{ border: "1px solid orange", padding: "30px" }}>
      D Component
      <h4>DDD</h4>
      <button className="ui button">
        {/* onClick={() => setCount(0)}> */}
        Reset Count
      </button>
    </div>
  );
}

export default PropDrilling;
