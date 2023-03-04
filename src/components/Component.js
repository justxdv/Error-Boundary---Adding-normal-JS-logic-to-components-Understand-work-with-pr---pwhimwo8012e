import React, { useState } from "react";

const Component = (props) => {
  const [error, setError] = useState(false);

  const changeFunc = () => {
    throw new Error("An error occurred.");
  };

  return (
    <>
      {error && <div>{somethingNotDefined}</div>}
      <button onClick={changeFunc}>Click me to generate an error</button>
    </>
  );
};

export default Component;
