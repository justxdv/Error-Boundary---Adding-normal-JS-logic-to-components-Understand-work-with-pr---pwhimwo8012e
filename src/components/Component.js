import React, { useState } from "react";

const Component = (props) => {
  const [error, setError] = useState(false);

  const changeFunc = () => {
  console.log("changeFunc called");
  try {
    throw new Error("An error occurred.");
  } catch (error) {
    setError(true);
  }
};


  return (
    <>
      {error && <div>{somethingNotDefined}</div>}
     <button id="gen" onClick={() => changeFunc()}>Generate Error</button>

    </>
  );
};

export default Component;
