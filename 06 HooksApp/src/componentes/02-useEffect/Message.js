import React, { useEffect, useState } from 'react'

const Message = () => {

    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    })
    useEffect(() => {
        //Effect
        const mouseMove = (e) => {
            const coords = {
                x: e.x,
                y: e.y
            }
            console.log(coords);
            setCoords(coords);
        }
        window.addEventListener('mousemove', mouseMove);

        console.log('componente Mount')
        //Effect when the component did unmount
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
        // dependency
    }, []);
    const { x, y } = coords;
    return (
        <div>
            <h3>x: {x}</h3>
            <h3>y: {y}</h3>
        </div>
    )
}

export default Message

