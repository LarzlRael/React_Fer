import React, { useEffect, useState } from 'react'
import Message from './Message';
import './useEffect.css';

const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    });
    const { name, email } = formState;

    // the function execute first time when the component mont
    useEffect(() => {
        console.log('hey!!');
    }, []);

    const handleInputChange = ({ target }) => {

        setformState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <div>
            <h1>UseEffect</h1>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu Nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}

                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="yourEMail@mail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            {(name==='123') && <Message />}
        </div>
    )
}

export default SimpleForm
