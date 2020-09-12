// libraries
import React from 'react'
import { func, string, arrayOf } from 'prop-types'

const Category = React.memo(function Category({ activeCategory, items, onClickCategory }) {
    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => onClickCategory(null)}
                    className={activeCategory === null ? 'active' : ''}>
                    Все
                </li>
                {items &&
                    items.map((name, index) => (
                        <li
                            key={name}
                            onClick={() => onClickCategory(index)}
                            className={activeCategory === index ? 'active' : ''}>
                            {name}
                        </li>
                    ))}
            </ul>
        </div>
    )
})

//component settings
Category.propTypes = {
    items: arrayOf(string).isRequired,
    onClickCategory: func,
}

Category.defaultProps = {
    activeCategory: null,
    items: [],
    onClickCategory: func,
}

export default Category
