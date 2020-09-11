//libraries
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
//reducers
import pizzasReducer from './reducers/pizzas'
import filterReducer from './reducers/filter'

const rootReducer = combineReducers({
	pizzasReducer: pizzasReducer,
	filterReducer: filterReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

window.store = store

export default store