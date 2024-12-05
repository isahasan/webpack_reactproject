import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserByID, increament } from "./redux/Features/counterSlice";

export default function App() {
  // const [getState,setState] = useState(0)
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterSlice);
  console.log(counter)
  return (
    <>
      <h1>{counter.increamentnumber}</h1>
      <button onClick={() => dispatch(increament())}>click counter</button>
      <button onClick={() => dispatch(fetchUserByID())}>fetch Data</button>
    </>
  );
}
