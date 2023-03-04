import React, { useState } from "react";

const Component = (props) => {
  const [error, setError] = useState(false);

  const changeFunc = () => {
    setError(true);
    console.error('An error occurred.');
  };

  if (error) {
    throw new Error("An error occurred.");
  }

  return (
    <>
      <button onClick={changeFunc}>Click me to generate an error</button>
    </>
  );
};

export default Component;
