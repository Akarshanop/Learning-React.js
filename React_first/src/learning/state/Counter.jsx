import { useState } from "react"

function Counter(){
    const [count,setcount]=useState(0)
    const inc=()=>{
        setcount(count+1)
    }
    const dec=()=>{
        setcount(count-1)   
    }
    const res=()=>{
        setcount(0)
    }
    return(
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={inc}>Increase</button>
            <button onClick={dec}>Decrease</button>
            <button onClick={res}>Reset</button>
        </div>
    )
}
export default Counter