import React from 'react';

import './input.scss';

const Input = ({id, type, placeholder, ...props}) => {
    return (
        <div className='input__wrap'>
            <label htmlFor={id} className='input__label'>
                {id}*
            </label>
            <input
                type={type}
                placeholder={placeholder}
                id={id}
                className='input__field'
                onChange={props.onChange}
                value={props.value}
            />
        </div>
    );
};

export default Input;
