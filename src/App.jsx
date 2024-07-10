import { Link, BrowserRouter, createBrowserRouter, Routes } from "react-router-dom"
import { useState } from "react"
import "./App.css"
import "./components/CartView.css"
import HomePage from "./pages/HomePage"
// import CartView from "./components/CartView"
// import CheckoutView from "./components/CheckoutView"

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
])

const App = () => {
	const [modal, setModal] = useState(false)

	const toggleModal = () => {
		setModal(!modal)
	}
	if (window.location.pathname != "/" && !modal) {
		window.location.pathname = "/"
	}
	const pathName = window.location.pathname
	// console.log(useLocation().pathname)
	console.log(modal)
	if (modal) {
		document.body.classList.add("active-modal")
	} else {
		document.body.classList.remove("active-modal")
	}
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>

				{modal && (
					<div className="modal">
						<div onClick={toggleModal} className="overlay"></div>
						<div className="modal-content">
							{pathName == "/cart" && (
								<div className="container-cart">
									<div className="top-section">
										<div className="left">
											<div className="cart-identifier current">
												<img src="./images/icons/arrow-down.png" alt="" />
												<p className="initial-progress">1</p>
												<p className="title-text">Cart</p>
											</div>
											<hr
												style={{
													width: "5vw",
													color: "#00000066",
												}}
											/>
											<div className="cart-identifier inactive">
												<img src="" alt="" />
												<p className="progress">2</p>
												<p className="title-text">Shipping</p>
											</div>
											<hr
												style={{
													width: "5vw",
													color: "#00000066",
												}}
											/>
											<div className="cart-identifier inactive">
												<img src="" alt="" />
												<p className="progress">3</p>
												<p className="title-text">Payment</p>
											</div>
										</div>
										<div className="right">
											<div className="clear" onClick={""}>
												<img src="./images/icons/trash.png" alt="" />
												<p className="clear-cart">Clear cart</p>
											</div>
											<div className="exit-btn" onClick={toggleModal}>
												<img
													className="exit"
													src="./images/icons/exit.png"
													alt=""
												/>
											</div>
										</div>
									</div>
									<div className="main-section">
										<div className="items">
											<div className="item">
												<div className="item-detail">
													<img src="./images/image541.png" alt="" />
													<div className="title">BOMBER SWEATER</div>
												</div>
												<div className="quantity">
													<button className="negative">-</button>
													<p className="value">1</p>
													<button className="positive">+</button>
												</div>
												<p className="price">$249</p>
											</div>
											<div className="item">
												<div className="item-detail">
													<img src="./images/image461.png" alt="" />
													<div className="title">BROWN SWEATER</div>
												</div>
												<div className="quantity">
													<button className="negative">-</button>
													<p className="value">1</p>
													<button className="positive">+</button>
												</div>
												<p className="price">$126</p>
											</div>
											<div className="item">
												<div className="item-detail">
													<img src="./images/bomber-short.png" alt="" />
													<div className="title">BOMBER SHORT</div>
												</div>
												<div className="quantity">
													<button className="negative">-</button>
													<p className="value">1</p>
													<button className="positive">+</button>
												</div>
												<p className="price">$88</p>
											</div>
											<div className="item">
												<div className="item-detail">
													<img src="./images/zara-cap.png" alt="" />
													<div className="title">ZARA CAP</div>
												</div>
												<div className="quantity">
													<button className="negative">-</button>
													<p className="value">1</p>
													<button className="positive">+</button>
												</div>
												<p className="price">$19</p>
											</div>
										</div>
										<div className="total-price">
											<p className="title">CART TOTAL</p>
											<p className="total-amount">$520</p>
										</div>
										<div className="next-stage">
											<button className="return">Continue Shopping</button>
											<Link to="/checkout">
												<button className="checkout">Process to Checkout</button>
											</Link>
										</div>
									</div>
								</div>
							)}
							{pathName == "/checkout" && (
								<div className="container-checkout">
									<div className="top-section">
										<div className="left">
											<div className="cart-identifier inactive">
												<p className="initial-progress">1</p>
												<p className="title-text">Cart</p>
											</div>
											<hr
												style={{
													maxWidth: "10vw",
													width: "100px",
													color: "#a74107",
													backgroundColor: "#a74107",
													border: "none",
													height: "1px",
												}}
											/>
											<div className="cart-identifier">
												<img src="./images/icons/arrow-down.png" alt="" />
												<p className="initial-progress">2</p>
												<p className="title-text">Shipping</p>
											</div>
											<hr
												style={{
													maxWidth: "10vw",
													width: "100px",
													color: "#00000066",
												}}
											/>
											<div className="cart-identifier inactive">
												<img src="" alt="" />
												<p className="progress">3</p>
												<p className="title-text">Payment</p>
											</div>
										</div>
										<div className="right">
											<img src="./images/icons/trash.png" alt="" />
											<p className="clear-cart">Clear cart</p>
											<img src="./images/icons/exit.png" alt="" />
										</div>
									</div>
									<div className="main-section">
										<div className="shipping-address">
											<h2>Shipping Address</h2>
											<div className="location-cost">
												<div className="address-select">
													<div className="each-address">
														<div className="each-address-select">
															<input
																type="radio"
																id="address-1"
																name="address"
															/>
															<label htmlFor="address-1">Lagos Island</label>
														</div>
														<p className="each-address-price">$2.50</p>
													</div>
													<div className="each-address">
														<div className="each-address-select">
															<input
																type="radio"
																id="address-1"
																name="address"
															/>
															<label htmlFor="address-1">
																Shop Pick Up(Shop at Chevron drive)
															</label>
														</div>
														<p className="each-address-price">Free</p>
													</div>
													<div className="each-address">
														<div className="each-address-select">
															<input
																type="radio"
																id="address-1"
																name="address"
															/>
															<label htmlFor="address-1">Within Nigeria</label>
														</div>
														<p className="each-address-price">$6.00</p>
													</div>
													<div className="each-address">
														<div className="each-address-select">
															<input
																type="radio"
																id="address-1"
																name="address"
															/>
															<label htmlFor="address-1">
																Outside Nigeria(International Shipping)
															</label>
														</div>
														<p className="each-address-price">$3.80</p>
													</div>
													<div className="each-address">
														<div className="each-address-select">
															<input
																type="radio"
																id="address-1"
																name="address"
															/>
															<label htmlFor="address-1">
																Epe, Badagry, Ikorodu, Ibuje Lekki
															</label>
														</div>
														<p className="each-address-price">$50.00</p>
													</div>
													<div className="each-address">
														<div className="each-address-select">
															<input
																type="radio"
																id="address-1"
																name="address"
															/>
															<label htmlFor="address-1">
																Abuja and All Northern States
															</label>
														</div>
														<p className="each-address-price">$4.10</p>
													</div>
													<div className="each-address">
														<div className="each-address-select">
															<input
																type="radio"
																id="address-1"
																name="address"
															/>
															<label htmlFor="address-1">Lagos Island</label>
														</div>
														<p className="each-address-price">$11.50</p>
													</div>
												</div>

												<div className="cost"></div>
											</div>
										</div>

										<div className="items">
											<h2 className="order-summary">Order Summary</h2>
											<div className="item">
												<div className="item-detail">
													<img src="./images/image541.png" alt="" />
													<div className="title">BOMBER SWEATER</div>
												</div>
												<div className="quantity">
													<button className="negative">-</button>
													<p className="value">1</p>
													<button className="positive">+</button>
												</div>
												<p className="price">$249</p>
											</div>
											<div className="item">
												<div className="item-detail">
													<img src="./images/image461.png" alt="" />
													<div className="title">BROWN SWEATER</div>
												</div>
												<div className="quantity">
													<button className="negative">-</button>
													<p className="value">1</p>
													<button className="positive">+</button>
												</div>
												<p className="price">$126</p>
											</div>
											<div className="item">
												<div className="item-detail">
													<img src="./images/bomber-short.png" alt="" />
													<div className="title">BOMBER SHORT</div>
												</div>
												<div className="quantity">
													<button className="negative">-</button>
													<p className="value">1</p>
													<button className="positive">+</button>
												</div>
												<p className="price">$88</p>
											</div>
											<div className="item">
												<div className="item-detail">
													<img src="./images/zara-cap.png" alt="" />
													<div className="title">ZARA CAP</div>
												</div>
												<div className="quantity">
													<button className="negative">-</button>
													<p className="value">1</p>
													<button className="positive">+</button>
												</div>
												<p className="price">$19</p>
											</div>
										</div>
										<div className="total-price">
											<p className="title">CART TOTAL</p>
											<p className="total-amount">$520</p>
										</div>
										<div className="next-stage">
											<button className="return">Continue Shopping</button>
											<button className="checkout">Process to Checkout</button>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				)}
				</Routes>
				<HomePage toggleModal={toggleModal} router={router} />
			</BrowserRouter>
		</div>
	)
}
export default App
