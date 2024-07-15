// import { useEffect } from "react"
import axios from "axios"
import { useEffect } from "react"
import { fetchProducts } from "./data"

// const url =
// 	"/api/products?organization_id=c891a1be6fd24d7dac2ec16daa816e07&reverse_sort=false&size=100&Appid=5EHG13OL69H2P7A&Apikey=f7dab62db488471ab0b960b359d7da7520240712122004671783"

// export const fetchProducts = async () => {
// 	const res = await axios.get(url)
// 	return res.data
// }


// const ProductList = () => {
// 	const [products, setProducts] = useState(null)
// 	const [loading, setLoading] = useState(true)
// 	useEffect(() => {
// 		const getProducts = async () => {
// 			try {
// 				const data = await fetchProducts()
// 				setProducts(data.items)
// 			} catch (error) {
// 				console.log(error.response)
// 			} finally {
// 				setLoading(false)
// 			}
// 		}
// 		getProducts()
// 	},[products])
// }
// console.log(Products)
// export default ProductList
