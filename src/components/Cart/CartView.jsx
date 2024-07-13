/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom"
// import NavBar from "./NavBar"
import CartItem from "./CartItem"
import CartNavBar from "./CartNavBar"
import "./CartView.css"
import { useGlobalContext } from "../../context/context"

const CartView = ({ toggleModal }) => {
	const { itemsMap } = useGlobalContext()

	// if (loading) {
	// 	return <h1> Loading...</h1>
	// }
	const cartItemsArray = Array.from(itemsMap.entries())
	// const cartArray = cartItemsArray?.slice(0, 4)
	console.log(itemsMap)
	if (cartItemsArray.length === 0) {
		return (
			<div>
				<div className="container-cart">
					<CartNavBar toggleModal={toggleModal} />
					<div className="main-section">
						<h1>There&apos;s no item in the cart...</h1>
					</div>
				</div>
			</div>
		)
	}
	return (
		<div>
			<div className="container-cart">
				<CartNavBar toggleModal={toggleModal} />
				<div className="main-section">
					<div className="items">
						{cartItemsArray.map((cartItem) => {
							// console.log({ ...cartItem })
							const [id, item] = cartItem
							return <CartItem key={id} {...item} />
						})}
					</div>
					<div className="total-price">
						<p className="title">CART TOTAL</p>
						<p className="total-amount">$520</p>
					</div>
					<div className="next-stage">
						<button
							className="return"
							onClick={() => {
								toggleModal(0)
							}}
						>
							Continue Shopping
						</button>
						<button
							className="checkout"
							onClick={() => {
								toggleModal(2)
							}}
						>
							Process to Checkout
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartView
