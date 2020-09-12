const SET_SORT = 'filterReducer/SET_SORT'
const SET_CATEGORY = 'filterReducer/SET_CATEGORY'

const initialState = {
    sort: {
        type: 'popular', //типы сортировки ... popular / price / name
        order: 'desc', //порядок сортировки ... asc / desc
    },
    category: null, //текущая категория ... Мясные / Вегетарианская / Гриль / Острые / Закрытые
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        //Сортируем по типу и порядку
        case SET_SORT:
            return {
                ...state,
                sort: action.payload,
            }

        //Сортируем по категории
        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload,
            }

        default:
            return state
    }
}

export default filterReducer

//actions
export const setSortBy = ({ type, order }) => ({ type: SET_SORT, payload: { type, order } })
export const setCategoryBy = (category) => ({ type: SET_CATEGORY, payload: category })
