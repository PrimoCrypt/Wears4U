/* eslint-disable react/prop-types */
import BestSellers from "../components/BestSellers"
import BlogView from "../components/BlogView"
import Categories from "../components/Categories"
import Footer from "../components/Footer"
import MainView from "../components/MainView"
import MenCollection from "../components/MenCollection"
import NavBar from "../components/NavBar"
import NewArrivals from "../components/NewArrivals"
import WomenCollection from "../components/WomenCollection"
import { useState } from "react"
import CartView from "../components/Cart/CartView"
import CheckoutView from "../components/CheckoutView"



const HomePage = () => {
	const [modal, setModal] = useState(0)

	// console.log(cartItems)
	const toggleModal = (number) => {
		setModal(number)
	}

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
						<CartView {...{ toggleModal }} />
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
						<CheckoutView toggleModal={toggleModal} />
					</div>
				</div>
			)}

			<NavBar toggleModal={toggleModal} modal={modal} />
			<MainView />
			<NewArrivals {...{ modal, toggleModal}} />
			<BestSellers toggleModal={toggleModal} modal={modal}  />
			<BlogView />
			<MenCollection toggleModal={toggleModal} modal={modal} />
			<WomenCollection toggleModal={toggleModal} modal={modal}  />
			<Categories />
			<Footer />
		</>
	)
}



export default HomePage
