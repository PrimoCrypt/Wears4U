/* eslint-disable react/prop-types */
import PropTypes from "prop-types"
import BestSellers from "../components/BestSellers"
import BlogView from "../components/BlogView"
import Categories from "../components/Categories"
import Footer from "../components/Footer"
import MainView from "../components/MainView"
import MenCollection from "../components/MenCollection"
import NavBar from "../components/NavBar"
import NewArrivals from "../components/NewArrivals"
import WomenCollection from "../components/WomenCollection"
import { useState, useEffect } from "react"
import CartView from "../components/Cart/CartView"
import CheckoutView from "../components/CheckoutView"
import axios from "axios"

const url =
	"/api/products?organization_id=c891a1be6fd24d7dac2ec16daa816e07&reverse_sort=false&size=100&Appid=5EHG13OL69H2P7A&Apikey=f7dab62db488471ab0b960b359d7da7520240712122004671783"

const HomePage = () => {
	const [modal, setModal] = useState(0)
	const [items, setItems] = useState(null)
	const [cartItems, setCartItems] = useState([])

	// console.log(cartItems)
	const toggleModal = (number) => {
		setModal(number)
	}
	const fetchData = async () => {
		try {
			const { data } = await axios(url)
			setItems(data?.items)
			setCartItems(data?.items?.slice(0, 4))
		} catch (error) {
			console.log(error.response)
		}
	}
	useEffect(() => {
		fetchData()
	}, [])

	

	return (
		<>
			{modal === 0 && (
				<div className="modal">
					<div
						onClick={() => {
							toggleModal(0)
						}}
						className="overlay"
					></div>
					<div className="modal-content">
						<CartView {...{ toggleModal, items, cartItems }} />
					</div>
				</div>
			)}

			{modal === 2 && (
				<div className="modal">
					<div
						onClick={() => {
							toggleModal(0)
						}}
						className="overlay"
					></div>
					<div className="modal-content">
						<CheckoutView toggleModal={toggleModal} items={items} />
					</div>
				</div>
			)}

			<NavBar toggleModal={toggleModal} modal={modal} />
			<MainView />
			<NewArrivals {...{ modal, toggleModal, items }} />
			<BestSellers toggleModal={toggleModal} modal={modal} items={items} />
			<BlogView />
			<MenCollection toggleModal={toggleModal} modal={modal} items={items} />
			<WomenCollection toggleModal={toggleModal} modal={modal} items={items} />
			<Categories />
			<Footer />
		</>
	)
}


HomePage.propTypes = {
	modal: PropTypes.number.isRequicheckoutred,
	toggleModal: PropTypes.func.isRequired,
}
export default HomePage
