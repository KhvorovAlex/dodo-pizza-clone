const ADD_PIZZA = 'cartReducer/ADD_PIZZA'

const initialState = {
    items: {}, //объект с купленными пиццами
    totalCount: 0, //общее число купленных пицц
    totalPrice: 0, //общая стоимость купленных пицц
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        //Добавляем пиццу в корзину
        case ADD_PIZZA: {
            const currentPizzaItems = !state.items[action.payload.id] //если данной пиццы нет в корзине
                ? [action.payload] //то создаем массив и ложим в него пиццу (obj)
                : [...state.items[action.payload.id], action.payload] //получаем массив и ложим в конец пиццу (obj)

            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload.id]: currentPizzaItems,
                },
                totalCount: state.totalCount + 1, //увеличиваем кол-во купленных пицц на единицу
                totalPrice: state.totalPrice + action.payload.price, //прибавляем стоимость купленной пиццы
            }
        }

        default:
            return state
    }
}

export default cartReducer

//actions
export const addPizza = (obj) => ({ type: ADD_PIZZA, payload: obj })
