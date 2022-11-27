import { useState } from "react";
import { CounterStyle } from "./Counter.style";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { HiOutlineTrash } from "react-icons/hi";
import { useSelector } from "react-redux";
import { StoreState } from "../../redux";


type CounterProps = {
  name?: string;
  price?:number;
}

export function Counter(props:CounterProps) {
  const [count, setCount] = useState(1);
  const getAmount = useSelector(
    (state:StoreState) => state.store.map((order) => order.order.map((amount) => amount.amount))
  )
 
 
  return (
   <CounterStyle className= {props.name}>
    {count === 1 ? (
     <HiOutlineTrash
      onClick={() => setCount((count) => count > 1 ? count - 1 : count - 0)}
     ></HiOutlineTrash>
    ) : (
     <GrFormSubtract onClick={() => setCount((count) => count > 0 ? count - 1 : 0)} />
    )}  
    <p>{count}</p>
    <GrFormAdd onClick={() =>  setCount((count) => count + 1)}></GrFormAdd>
   </CounterStyle>
  );
 }