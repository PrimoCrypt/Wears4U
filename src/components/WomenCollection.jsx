/* eslint-disable react/prop-types */
import "./WomenCollection.css"

const WomenCollection = ({ toggleModal, modal }) => {
	// console.log(modal)
	const toggleCart = () => {
		console.log(modal)
		toggleModal(1)
	}
	return (
		<div className="container-wc">
			<div className="heading">
				<p className="heading1">women</p>
				<h1 className="heading2">COLLECTION</h1>
			</div>
			<div className="content">
				<div className="main-image">
					<img
						src="./images/women-collection/frame-wc-main.png"
						alt="Latest arrivals"
					/>
				</div>
				<div className="image1">
					<div className="love-btn">
						<img src="./images/love.png" alt="" />
					</div>
					<img src="./images/women-collection/image47_1.png" alt="" />
					<div className="details">
						<p className="item-name">LEATHER BIKER JACKET</p>
						<div className="lower-section">
							<p className="item-price">$128</p>
							<img
								src="./images/icons/shopping-cart.png"
								alt=""
								onClick={toggleCart}
							/>
						</div>
					</div>
				</div>
				<div className="image2">
					<div className="love-btn">
						<img src="./images/love.png" alt="" />
					</div>
					<img src="./images/women-collection/image562.png" alt="" />
					<div className="details">
						<p className="item-name">QUIET LUXURY HOODIE</p>
						<div className="lower-section">
							<p className="item-price">$500</p>
							<img
								src="./images/icons/shopping-cart.png"
								alt=""
								onClick={toggleCart}
							/>
						</div>
					</div>
				</div>
				<div className="image3">
					<div className="love-btn">
						<img src="./images/love.png" alt="" />
					</div>
					<img src="./images/women-collection/image561.png" alt="" />
					<div className="details">
						<p className="item-name">BROWN SWEATER</p>
						<div className="lower-section">
							<p className="item-price">$126</p>
							<img
								src="./images/icons/shopping-cart.png"
								alt=""
								onClick={toggleCart}
							/>
						</div>
					</div>
				</div>
				<div className="image4">
					<div className="love-btn">
						<img src="./images/love.png" alt="" />
					</div>
					<img src="./images/women-collection/image56.png" alt="" />
					<div className="details">
						<p className="item-name">PATAGONIA COAT</p>
						<div className="lower-section">
							<p className="item-price">$699</p>
							<img
								src="./images/icons/shopping-cart.png"
								alt=""
								onClick={toggleCart}
							/>
						</div>
					</div>
				</div>
			</div>
			<p style={{ textAlign: "left", fontWeight: 700 }}>see more</p>
		</div>
	)
}
export default WomenCollection
