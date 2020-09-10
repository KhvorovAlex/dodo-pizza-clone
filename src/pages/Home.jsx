// libraries
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
//components
import { Category, SortPopup } from '../components'
import PizzaBlock from '../components/PizzaBlock'
// actions
import { setCategoryBy } from '../redux/reducers/filter'


const sortIems = [
	{ name: 'популярности', type: 'popular', order: 'desc' },
	{ name: 'цене', type: 'price', order: 'desc' },
	{ name: 'алфавит', type: 'name', order: 'asc' },
]

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые',  'Закрытые']

function Home() {	

	const dispatch = useDispatch()
	const pizzas = useSelector(state => { 
		console.log('беру пиццы из store') 
		return state.pizzasReducer.pizzas
	})

	const onSelectCategory = React.useCallback((index) => {
		dispatch(setCategoryBy(index))
	}, [dispatch])
	
	return (
		<div className="container">
			<div className="content__top">
				<Category items={categories} setCategory={onSelectCategory} />
				<SortPopup items={sortIems} />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{pizzas.map(items => <PizzaBlock key={items.id}  {...items} />)}
			</div>
	  	</div>	
	)
}

export default Home