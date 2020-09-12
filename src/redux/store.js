//libraries
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
//reducers
import pizzas from './reducers/pizzas'
import filter from './reducers/filter'
import cart from './reducers/cart'

const rootReducer = combineReducers({
    pizzas,
    filter,
    cart,
})

// подключаем devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

//store глобально
window.store = store

export default store
