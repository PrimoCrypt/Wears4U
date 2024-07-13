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
import {
	CLEAR_CART,
	REMOVE,
	INCREASE,
	DECREASE,
	LOADING,
	DISPLAY_ITEMS,
} from "../actions"

const url =
	"/api/products?organization_id=c891a1be6fd24d7dac2ec16daa816e07&reverse_sort=false&size=100&Appid=5EHG13OL69H2P7A&Apikey=f7dab62db488471ab0b960b359d7da7520240712122004671783"

const AppContext = createContext()

export const AppProvider = ({ children }) => {
	const [items, setItems] = useState(null)
	const [loading, setLoading] = useState(false)

	const fetchData = async () => {
		try {
			setLoading(true)
			const { data } = await axios(url)
			setItems(data?.items)
		} catch (error) {
			console.log(error.response)
		} finally {
			setLoading(false)
		}
	}
	useEffect(() => {
		fetchData()
	}, [])
	const initialItemsMap = items ? new Map(Object.entries(items)) : new Map()
	// console.log(...initialItemsMap)
	if (initialItemsMap) {
		const initialState = {
			loading: false,
			itemsMap: initialItemsMap,
		}
		const [state, dispatch] = useReducer(reducer, initialState)
		return (
			<AppContext.Provider value={{ ...state, dispatch, ...initialState }}>
				{children}
			</AppContext.Provider>
		)
	}
	console.log(initialItemsMap)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}
