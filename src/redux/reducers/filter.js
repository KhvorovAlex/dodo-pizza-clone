const SET_SORT = "filterReducer/SET_SORT"
const SET_CATEGORY = "filterReducer/SET_CATEGORY"

const initialState = {
	sort: {
		type: 'popular', 
		order: 'desc'
	},
	category: null
}


const filterReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SORT: 
			return {
				...state,
				sort: action.payload
			}

		case SET_CATEGORY: 
			return {
				...state,
				category: action.payload
			}

		default:
			return state
	}
}

export default filterReducer

export const setSortBy = ({type, order}) => ({type: SET_SORT, payload: {type, order}})
export const setCategoryBy = (category) => ({type: SET_CATEGORY, payload: category})