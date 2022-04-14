import React, { useEffect, useLayoutEffect, useReducer, useState } from "react";
import "./style.css";

const reducer = (state, action) => {
  if (action.type === "INCR") {
    state = state + 1;
  }
  return state;
};

const UseReducer = () => {
  const initialData = 10;
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div className="button2" onClick={() => dispatch2({ type: "INCR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>INCR
        </div>
      </div>
    </>
  );
};

export default UseReducer;
