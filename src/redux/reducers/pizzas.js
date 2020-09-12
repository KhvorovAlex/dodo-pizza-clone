//libraries
import axios from 'axios'

const SET_PIZZAS_SUCCESS = 'pizzasReducer/SET_PIZZAS_SUCCESS'
const SET_LOADED = 'pizzasReducer/SET_LOADED'

const initialState = {
    items: [],
    isLoaded: false,
}

const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        //Грузим пиццы в стейт
        case SET_PIZZAS_SUCCESS:
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            }

        //Показываем preloader пока идет pending
        case SET_LOADED:
            return {
                ...state,
                isLoaded: action.payload,
            }

        default:
            return state
    }
}

export default pizzasReducer

//actions
const setPizzasSuccess = (pizzas) => ({ type: SET_PIZZAS_SUCCESS, payload: pizzas })
const setLoaded = (value) => ({ type: SET_LOADED, payload: value })

//thunks
export const setPizzas = (category, { type, order }) => (dispatch) => {
    dispatch(setLoaded(false))
    axios
        .get(
            `http://localhost:3001/pizzas?${
                category !== null ? 'category=' + category : ''
            }&_sort=${type}&_order=${order}`,
        )
        .then((response) => dispatch(setPizzasSuccess(response.data)))
}
