import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {

        setInputValue(e.target.value);
        console.log('HandleInputChange Llamado');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit hecho');
        if (inputValue.trim().length >= 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
                <p> {inputValue}</p>
            <input
                onChange={handleInputChange}
                type="text"
                value={inputValue}
            />
        </form>
    )
}
AddCategory.protoTypes = {
    setCategories: PropTypes.func.isRequired
}
export default AddCategory
