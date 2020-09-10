const SET_PIZZAS_SUCCESS = "pizzasReducer/SET_PIZZAS_SUCCESS"

const initialState = {
	pizzas: [],
	isLoaded: false
}


const pizzasReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PIZZAS_SUCCESS: 
			return {
				...state,
				pizzas: action.payload,
				isLoaded: true
			}

		default:
			return state
	}
}

export default pizzasReducer

export const setPizzasSuccess = (pizzas) => ({type: SET_PIZZAS_SUCCESS, payload: pizzas})