import { useState } from "react";

const LocalState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button className="ui button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <h2>You clicked: {count} times</h2>
    </div>
  );
};

export default LocalState;
