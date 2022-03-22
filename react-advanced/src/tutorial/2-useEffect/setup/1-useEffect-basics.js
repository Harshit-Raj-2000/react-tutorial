import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter

// useEffect by default runs after every render of the component
// however, if we pass an empty array as 2nd parameter, it runs
// only after the initial render

// in this list we pass the dependencies which when changed, will trigger useEffect

// we can haavve multiple use effect calls

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log("Hello");
  }, []);

  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;
