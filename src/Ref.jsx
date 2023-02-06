import React, { useRef } from "react";

function Ref() {
    const inputRef = useRef(null);

    return (
        <div>
            <h1>Hubble</h1>
            <input type="text" placeholder="Ex..." ref={inputRef} />
            <button onClick = { () => {
                inputRef.current.value = "";
            }}>Change Name</button>
        </div>
    )
}

export default Ref;