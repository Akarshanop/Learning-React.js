//A controlled components is a form whose input field value is controlled by React's state 

import { useState } from "react";

function Use() {
    const [name, setname] = useState("");
    const [pass, setpass] = useState("");
    const [email, setemail] = useState("");
    return (
        <div>
            <h1>Get input Field value</h1>
            <form action="" method="get">
                <input type="text" value={name} onChange={(event)=>setname(event.target.value)} placeholder="Enter The Name"/>
                <br /><br />
                <input type="text" value={pass} onChange={(event)=>setpass(event.target.value)} placeholder="Enter The Pass"/>
                 <br /><br />
                <input type="text" value={email} onChange={(event)=>setemail(event.target.value)} placeholder="Enter The email"/>
                 <br /><br />
                <button onClick={() => {setname(""),setemail(""),setpass("")}}>Clear</button>
                <br /><br />
                <button>Submit</button>
            </form>
             <p>Current Name: {name}</p>
             <p>Current pass: {pass}</p>
             <p>Current email: {email}</p>
        </div>
    );
}

export default Use;
