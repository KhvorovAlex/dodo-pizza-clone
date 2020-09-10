import { createStore, combineReducers } from 'redux'
import pizzasReducer from './reducers/pizzas'
import filterReducer from './reducers/filter'

const rootReducer = combineReducers({
	pizzasReducer: pizzasReducer,
	filterReducer: filterReducer
})

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.store = store

export default store