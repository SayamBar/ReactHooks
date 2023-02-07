import { useMemo, useState } from "react";
 

function Memo() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const isEven = useMemo(() => {
        let i = 1
        while(i<90000000) i++
        return count1 % 2 == 0
    },[count1]) 
    

    return (
        <div>
            <button onClick={() => {
                setCount1(count1 + 1)
            }}>Counter1-{count1}</button>
            <h4>{isEven ? 'Even' : 'Odd'}</h4>
            <button onClick={() => {
                setCount2(count2 + 1)
            }}>Counter2-{count2}</button>
        </div>
    )
}

export default Memo;