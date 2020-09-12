//libraries
import React from 'react'
import ContentLoader from 'react-content-loader'

const PizzaBlockPreloader = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={457}
        className="pizza-block"
        viewBox="0 0 280 457"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}>
        <circle cx="140" cy="140" r="130" />
        <rect x="0" y="283" rx="6" ry="6" width="280" height="30" />
        <rect x="1" y="323" rx="6" ry="6" width="280" height="67" />
        <rect x="101" y="397" rx="20" ry="20" width="176" height="59" />
        <rect x="6" y="405" rx="6" ry="6" width="84" height="43" />
    </ContentLoader>
)

export default PizzaBlockPreloader
