import { useState } from "react";
import { useErrorHandler } from "react-error-boundary";

function Hero({ heroName }) {
  if (heroName === "Joker") {
    throw new Error("Not a hero");
  }
  return <div>{heroName}</div>;
}



const MyCounter = () => {
    const MIN_COUNT_ALLOWED = 0

    const [count, setCount] = useState(10)
    const handleError = useErrorHandler()

    const handleClick = () => {
        try {
        if (count === MIN_COUNT_ALLOWED) {
            throw new Error ('Count limit exceeded')
        } else {
            setCount((c) => c - 1)
        }
    } catch(e) {
        handleError(e)
    }
}
    
   

    return (
    <div>
        <button onClick={handleClick}>Counter {count}</button>
    </div>
    )
}

export {Hero, MyCounter };
