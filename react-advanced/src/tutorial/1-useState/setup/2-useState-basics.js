import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("random title");

  const handleClick = () => {
    text === "random title" ? setText("Hello World") : setText("random title");
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" type="button" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
