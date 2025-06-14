import { useState } from "react";

function Use() {
    const [val, setVal] = useState("");

    return (
        <div>
            <h1>Get input Field value</h1>
            <input
                type="text"
                value={val}
                onChange={(event) => setVal(event.target.value)}
                placeholder="Enter Username"
            />
            <br />
            <br />
            <button onClick={() => setVal("")}>Clear</button>
            <p>Current Field: {val}</p>
        </div>
    );
}

export default Use;
