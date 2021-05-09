import React, { useState } from 'react'
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {


    //using the useState
    // first argument is the name of state 
    // second argument is the function to update the state

    const [counter, setCounter] = useState(value);


    const handleAdd = () => {
        //handleAdd

        // setCounter(counter+1)
        setCounter((c) => {
            return c + 1
        });

    }

    const handleSubstract = () => {
        //handleAdd

        setCounter(counter - 1)


    }
    const handleReset = () => {
        //handleAdd
        setCounter(0);
    }

    return (
        <div >
            <h1>CounterAPP</h1>
            <h2>{value}</h2>
            <h3>El nombre por defecto es : {counter}</h3>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubstract}>-1</button>


        </div>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 10
}
export default CounterApp;
