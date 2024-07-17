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
import axios from "axios"
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
// const cart = new Map(items)
console.log(itemsAsMap)
const initialState = {
	loading: false,
	item: [],
	cart: itemsAsMap,
}
// console.log(items)

export const AppProvider = ({ children }) => {
	// console.log(items)
	// console.log(fetchProducts())
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
