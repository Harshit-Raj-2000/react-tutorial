import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      <h1>{text || "John Doe"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {/* {isError && <h1>Error...</h1>} */}
      {/*// shows something when isError is True */}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>There is no error</h2>
        </div>
      )}
      {/*// shows something when isError is True, and something when it is false */}
    </>
  );
};

export default ShortCircuit;
