import React, { useEffect, useState } from "react";
import axios from "axios";

function Effect() {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
        .then((response) => {
            setData(response.data.name);
            console.log("hello");
        })
    }, [])
    return (
        <div>
            Hello {data}
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count+1);
            }}>Click</button>
        </div>
    )
}

export default Effect;