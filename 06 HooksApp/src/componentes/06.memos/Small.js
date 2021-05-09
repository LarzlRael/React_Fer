import React from 'react'

const Small = React.memo(({ value }) => {

    // avoid rendering if properties are the same
    console.log('Me volvi a llamar')

    return (
        <small>
            {value}
        </small>
    )
})

export default Small
