import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { procesoPesado } from '../helpers/procesoPesando';


const MemoHook = () => {

    const { counter, increment } = useCounter(500);
    const [show, setShow] = useState(true);

    
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (

        <div>
            <h1>Counter <small>{counter}</small> </h1>
            <hr />

            <p>{memoProcesoPesado}</p>


            <button
                className="btn btn-primary"
                onClick={increment}>+1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={() => {
                    setShow(!show);
                }}>Show/hide
                {JSON.stringify(show)}
            </button>

        </div>

    )
}

export default MemoHook
