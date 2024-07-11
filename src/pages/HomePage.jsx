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
import { useState } from "react"
import CartView from "../components/CartView"
import CheckoutView from "../components/CheckoutView"


const HomePage = () => {
	const [modal, setModal] = useState(0)


	const toggleModal = (number) => {
		setModal(number)
	}
	return (
		<>
			{modal === 1 && (
				<div className="modal">
					<div
						onClick={() => {
							toggleModal(0)
						}}
						className="overlay"
					></div>
					<div className="modal-content">
						<CartView toggleModal={toggleModal} />
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
			<NewArrivals />
			<BestSellers />
			<BlogView />
			<MenCollection />
			<WomenCollection />
			<Categories />
			<Footer />
		</>
	)
}
HomePage.propTypes = {
	modal: PropTypes.bool.isRequicheckoutred,
	toggleModal: PropTypes.func.isRequired,
}
export default HomePage
