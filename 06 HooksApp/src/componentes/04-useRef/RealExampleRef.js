import React, { useState } from 'react'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks'
const RealExampleRef = () => {

    const [show, setShow] = useState(false)
    return (
        <div>
            <h2>RealExampleRef</h2>
            <hr />
            {show && <MultipleCustomHooks />}

            <button
                className="btn btn-primary mt-5"
                onClick={() => { setShow(!show) }}
            >Show/hide</button>
        </div>
    )
}

export default RealExampleRef
