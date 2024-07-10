import { Link } from "react-router-dom"
import NavBar from "./NavBar"
import "./CartView.css"

const CartView = () => {
	return (
		<div>
			<NavBar />
			<div className="container-cart">
				<div className="top-section">
					<div className="left">
						<div className="cart-identifier">
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
							<img src="./images/icons/trash.png" alt=""  />
							<p className="clear-cart">Clear cart</p>
						</div>
						<img src="./images/icons/exit.png" alt="" />
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
		</div>
	)
}
export default CartView
