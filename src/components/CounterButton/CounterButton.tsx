import { useState } from "react";
import { CounterStyle } from "./Counter.style";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { HiOutlineTrash } from "react-icons/hi";

export function Counter() {
  const [count, setCount] = useState(1);
 
  return (
   <CounterStyle>
    {count === 1 ? (
     <HiOutlineTrash
      onClick={() => setCount((count) => count - 1)}
     ></HiOutlineTrash>
    ) : (
     <GrFormSubtract onClick={() => setCount((count) => count - 1)} />
    )}
    <p>{count}</p>
    <GrFormAdd onClick={() => setCount((count) => count + 1)}></GrFormAdd>
   </CounterStyle>
  );
 }