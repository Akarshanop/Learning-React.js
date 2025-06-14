import { useState } from "react";
function Toggle(){

    const [display,setdisplay]=useState(true)

    return(
        <div>
            <button onClick={()=>setdisplay(!display)}>Remove</button>
            {
                display?<h1>Akarshan Tyagi</h1>:null
            }
        </div>
    )
}
export default Toggle