// libraries
import React from 'react'

const Category = React.memo(	
	function Category({ items, setCategory }) {

	const [ activeItem, setActiveItem ] = React.useState(null)
		
	const onSelectItem = (index) => {
		setActiveItem(index)
		setCategory(index)
	}

	console.log("RENDER component Category")

	return (
		<div className="categories">
			<ul>
				<li 
					onClick={() => onSelectItem(null)}
					className={activeItem === null ? 'active' : ''}
				>
					Все
				</li>
				{items && items.map((name, index) => 
					<li 
						key={name}
						onClick={() => onSelectItem(index)}
						className={activeItem === index ? 'active' : ''}
					>
						{name}
					</li> 
				)}
			</ul>
		</div>
	)
})

export default Category
