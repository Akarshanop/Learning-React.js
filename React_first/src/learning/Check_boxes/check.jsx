import { useState } from "react";

function Checkboxes() {
    const [skill,setskill]=useState([])
    const handleskill=(event)=>{
        console.log(event.target.value,event.target.checked);
    }
    return (
        <div >
            <h3 style={{ color: "red" }}>Select Your Skills</h3>
            <input type="checkbox" id="One" onChange={handleskill}/>
            <label htmlFor="One">C++</label>
            <br />
            <input type="checkbox" id="Two" onChange={handleskill}/>
            <label htmlFor="Two">Java</label>
            <br />
            <input type="checkbox" id="Three" onChange={handleskill} />
            <label htmlFor="Three">Python</label>
            <br />
            <input type="checkbox" id="Four" onChange={handleskill} />
            <label htmlFor="Four">JS</label>
        
        </div>
    );
}

export default Checkboxes;
