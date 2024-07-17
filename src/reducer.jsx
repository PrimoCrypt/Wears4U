import {
	CLEAR_CART,
	REMOVE,
	INCREASE,
	DECREASE,
	LOADING,
	DISPLAY_ITEMS,
} from "./actions"
// import { useGlobalContext } from "./context/context"
// const { } = useGlobalContext() 

// const initialState = {
// 	loading: false,
// 	itemsMap: new Map(),
// 	cart: new Map(),
// }
const reducer = (state , action) => {
	console.log(state)
	if (action.type === CLEAR_CART) {
		// console.log(state)
		return { ...state, cart: new Map()};
	}
	if(action.type === REMOVE){
		const newCart = new Map(state.cart)
		newCart.delete(action.payload.id)
		return { ...state, cart: newCart }
	}
	throw new Error(`no matching action type : ${action.type}`)
}

export default reducer
