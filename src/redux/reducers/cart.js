const ADD_PIZZA = 'cartReducer/ADD_PIZZA'
const PLUS_PIZZA = 'cartReducer/PLUS_PIZZA'
const MINUS_PIZZA = 'cartReducer/MINUS_PIZZA'
const DELETE_PIZZA = 'cartReducer/DELETE_PIZZA'
const CLEAR_CART = 'cartReducer/CLEAR_CART'

const initialState = {
    items: {}, //объект с купленными пиццами
    totalCount: 0, //общее число купленных пицц
    totalPrice: 0, //общая стоимость купленных пицц
}

//расчитываем общее кол-во пицц
const getTotalCount = (oldItems, currentItems, id) => {
    let acum = 0
    for (let key in oldItems) {
        if (key !== id) {
            acum += oldItems[key].items.length
        }
    }
    return acum + currentItems.length
}

//расчитываем общую стоимость пицц
const getTotalSum = (oldItems, currentItems, id) => {
    let acum = 0
    for (let key in oldItems) {
        if (key !== id) {
            acum += oldItems[key].totalPrice
        }
    }
    return acum + currentItems.length * currentItems[0].price
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        //Добавляем пиццу в корзину
        case ADD_PIZZA: {
            const newItem = !state.items[action.payload.id] //если данной пиццы нет в корзине
                ? [action.payload] //то создаем массив и ложим в него пиццу (obj)
                : [...state.items[action.payload.id].items, action.payload] //получаем массив и ложим в конец пиццу (obj)

            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload.id]: {
                        items: newItem,
                        totalPrice: newItem.length * action.payload.price,
                        totalCount: newItem.length,
                    },
                },
                totalCount: state.totalCount + 1, //увеличиваем кол-во купленных пицц на единицу
                totalPrice: state.totalPrice + action.payload.price, //прибавляем стоимость купленной пиццы
            }
        }

        //уменьшаяем кол-во пицц в корзине
        case MINUS_PIZZA: {
            const oldItems = state.items[action.id].items
            const newItems = oldItems.length > 1 ? oldItems.slice(1) : oldItems

            return {
                ...state,
                items: {
                    ...state.items,
                    [action.id]: {
                        items: newItems,
                        totalPrice: newItems.length * newItems[0].price,
                        totalCount: newItems.length,
                    },
                },
                totalCount: getTotalCount(state.items, newItems, action.id),
                totalPrice: getTotalSum(state.items, newItems, action.id),
            }
        }

        //увеличиваем кол-во пицц в корзине
        case PLUS_PIZZA: {
            const newItems = [...state.items[action.id].items, state.items[action.id].items[0]]

            return {
                ...state,
                items: {
                    ...state.items,
                    [action.id]: {
                        items: newItems,
                        totalPrice: newItems.length * newItems[0].price,
                        totalCount: newItems.length,
                    },
                },
                totalCount: getTotalCount(state.items, newItems, action.id),
                totalPrice: getTotalSum(state.items, newItems, action.id),
            }
        }

        //удаление пиццы
        case DELETE_PIZZA: {
            const newItems = {
                ...state.items,
            }
            const currentItemTotalCont = state.items[action.id].totalCount
            const currentItemTotalPrice = state.items[action.id].totalPrice

            delete newItems[action.id]

            return {
                ...state,
                items: {
                    ...newItems,
                },
                totalCount: state.totalCount - currentItemTotalCont,
                totalPrice: state.totalPrice - currentItemTotalPrice,
            }
        }

        //Очистка корзины
        case CLEAR_CART:
            return {
                ...state,
                items: {},
                totalCount: 0,
                totalPrice: 0,
            }

        default:
            return state
    }
}

export default cartReducer

//actions
export const addPizza = (obj) => ({ type: ADD_PIZZA, payload: obj })
export const deletePizza = (id) => ({ type: DELETE_PIZZA, id })
export const plusPizza = (id) => ({ type: PLUS_PIZZA, id })
export const minusPizza = (id) => ({ type: MINUS_PIZZA, id })
export const clearCart = () => ({ type: CLEAR_CART })
