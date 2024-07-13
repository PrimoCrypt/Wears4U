/* eslint-disable react/prop-types */
const CartNavBar = ({ toggleModal }) => {
	return (
		<>
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
					<div
						className="exit-btn"
						onClick={() => {
							toggleModal(0)
						}}
					>
						<img className="exit" src="./images/icons/exit.png" alt="" />
					</div>
				</div>
			</div>
		</>
	)
}
export default CartNavBar