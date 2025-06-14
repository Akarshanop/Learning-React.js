import { useState } from "react";
import Counter from "./Counter";


function States() {
  const [fruit, setFruit] = useState("Apple");
  const [flag, setFlag] = useState(true); // ✅ use state for flag

  const handleFruit = () => {
    if (flag) {
      setFruit("Banana");
      setFlag(false);
    } else {
      setFruit("Apple");
      setFlag(true);
    }
  };

  return (
    <div>
      <h1>State in React</h1>
      <h1>{fruit}</h1>
      <button onClick={handleFruit}>Change</button>
      <Counter/>
    </div>
  );
}
//variable are the container which stores values
//State is also a container data like variable but as soon as we change the value our component is re-rendered (mutable and dynamic)
//Hooks jinki starting mein use likha ho woh hook hai

export default States;
