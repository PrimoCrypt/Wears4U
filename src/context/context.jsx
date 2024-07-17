/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
	useContext,
	useReducer,
	useEffect,
	createContext,
	useState,
} from "react"
import { itemsAsMap } from "../data/data"
import reducer from "../reducer"
import {
	CLEAR_CART,
	REMOVE,
	INCREASE,
	DECREASE,
	LOADING,
	DISPLAY_ITEMS,
} from "../actions"

const AppContext = createContext()

const initialState = {
	loading: false,
	items: itemsAsMap,
	cart: itemsAsMap,
}
// console.log(items)

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const clearCart = () => {
		dispatch({ type: CLEAR_CART })
	}
	const removeItem = (id) => {
		dispatch({ type: REMOVE, payload: { id } })
	}

	return (
		<AppContext.Provider value={{ ...state, clearCart, removeItem }}>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}
