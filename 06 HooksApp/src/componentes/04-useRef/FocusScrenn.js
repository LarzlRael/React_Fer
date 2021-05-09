import React, { useRef } from 'react'

const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef)
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder="su nombre"
            />
            <button className="btn btn-outline-primary mt-4" onClick={handleClick}>Limpiar</button>
        </div>
    )
}

export default FocusScreen
