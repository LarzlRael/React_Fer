import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'


const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    // negando 2 veces para convertirlo en boolean
    const { author, quote } = !!data && data[0];
    console.log(loading);
    return (
        <div>
            <h1>BreakingBad Qoutes</h1>
            <hr />

            {loading ?
                <div className="alert alert-info text-center">
                    ...loading
                </div>
                :
                <blockquote className="blockquote text-right">
                    <p className="mb-0">{quote}</p>
                    <footer className="blockquote-footer">{author}</footer>
                </blockquote>
            }

            <button
                className="btn btn-success"
                onClick={increment}
            >Siguiente Frase </button>

        </div>
    )
}

export default MultipleCustomHooks;
