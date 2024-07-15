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
import reducer from "../reducer"
import axios from "axios"
import { items } from "../data/data"

// import { fetchData } from "../data/data"

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
	items,
	cart: items
}

export const AppProvider = ({ children }) => {
	// console.log(items)
	// console.log(fetchProducts())
	const [state, dispatch] = useReducer(reducer, initialState)
	const clearCart =() => {
		dispatch({type: CLEAR_CART})
	}

	
	return (
		<AppContext.Provider value={{ state, clearCart }}>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}
