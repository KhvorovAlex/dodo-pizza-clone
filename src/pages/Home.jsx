//libraries
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
//components
import { Category, SortPopup } from '../components'
import PizzaBlock from '../components/PizzaBlock'
import PizzaBlockPreloader from '../components/PizzaBlockPreloader'
//actions
import { setCategoryBy, setSortBy } from '../redux/reducers/filter'
import { setPizzas } from '../redux/reducers/pizzas'
import { addPizza } from '../redux/reducers/cart'

//Component settings
const sortIems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавит', type: 'name', order: 'asc' },
]

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

function Home() {
    //global store
    const dispatch = useDispatch()
    const pizzas = useSelector(({ pizzas }) => pizzas.items)
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
    const cartItems = useSelector(({ cart }) => cart.items)
    const { category, sort } = useSelector((state) => state.filter)

    //hooks
    React.useEffect(() => {
        dispatch(setPizzas(category, sort))
    }, [dispatch, category, sort])

    //local functions
    const onSelectCategory = React.useCallback(
        (category) => {
            dispatch(setCategoryBy(category))
        },
        [dispatch],
    )

    const onSelectSort = React.useCallback(
        (obj) => {
            dispatch(setSortBy(obj))
        },
        [dispatch],
    )

    const addPizzaToCart = (obj) => {
        dispatch(addPizza(obj))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Category
                    activeCategory={category}
                    items={categories}
                    onClickCategory={onSelectCategory}
                />
                <SortPopup activeSort={sort.type} items={sortIems} onClickSort={onSelectSort} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? pizzas.map((items) => (
                          <PizzaBlock
                              key={items.id}
                              {...items}
                              addPizzaToCart={addPizzaToCart}
                              addedCount={cartItems[items.id] && cartItems[items.id].items.length}
                          />
                      ))
                    : Array(10)
                          .fill(0)
                          .map((_, index) => <PizzaBlockPreloader key={index} />)}
            </div>
        </div>
    )
}

export default Home
