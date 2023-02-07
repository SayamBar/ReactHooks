import React,{ useState, useCallback } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

function Callback() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(30000);

    const incrementage = useCallback(() => {
        setAge(age+1);
    },[age]);
    const incrementsalary = useCallback(() => {
        setSalary(salary+1000);
    },[salary]);
    return (
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button handleclick={incrementage}>Increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleclick={incrementsalary}>Increment Salary</Button>
        </div>
    )
}

export default Callback;