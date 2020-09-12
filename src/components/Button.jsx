//libraries
import React from 'react'
import cNames from 'classnames'
import { array, bool, func, string } from 'prop-types'

function Button({ onClick, outline, className, children }) {
    return (
        <button
            onClick={onClick}
            className={cNames('button', className, {
                'button--outline': outline,
            })}>
            {children}
        </button>
    )
}

//component settings
Button.propTypes = {
    onClick: func,
    outline: bool,
    className: string,
    children: array,
}

export default Button
