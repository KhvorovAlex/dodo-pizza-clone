import React from 'react'
import cNames from 'classnames'

function Button({ onClick, outline, className, children }) {
	return (
		<button 
			onClick={onClick}
			className={cNames('button', className, {
				'button--outline': outline
			})}
		>
			{children}
		</button>
	)
}

export default Button
