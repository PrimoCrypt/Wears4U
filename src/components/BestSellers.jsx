/* eslint-disable react/prop-types */
import "./BestSellers.css"

const BestSellers = ({ toggleModal, modal }) => {
	// console.log(modal)
	const toggleCart = () => {
		console.log(modal)
		toggleModal(1)
	}
	return (
		<div className="container-bs">
			<h1 className="heading">BEST SELLERS</h1>
			<div className="content">
				<div className="image1">
					<div className="love-btn">
						<img src="./images/love.png" alt="" />
					</div>
					<img src="./images/image54.png" alt="" />
					<div className="details">
						<p className="item-name">TEE SHIRT</p>
						<div className="lower-section">
							<p className="item-price">$19</p>
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
					<img src="./images/image591.png" alt="" />
					<div className="details">
						<p className="item-name">CARTON PANT</p>
						<div className="lower-section">
							<p className="item-price">$29</p>
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
					<img src="./images/image48.png" alt="" />
					<div className="details">
						<p className="item-name">BURBERRY BARREL BAG</p>
						<div className="lower-section">
							<p className="item-price">$1800</p>
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
					<img src="./images/image541.png" alt="" />
					<div className="details">
						<p className="item-name">BOMBER SWEATER</p>
						<div className="lower-section">
							<p className="item-price">$249</p>
							<img
								src="./images/icons/shopping-cart.png"
								alt=""
								onClick={toggleCart}
							/>
						</div>
					</div>
				</div>
				<div className="image5">
					<div className="love-btn">
						<img src="./images/love.png" alt="" />
					</div>
					<img src="./images/image59.png" alt="" />
					<div className="details">
						<p className="item-name">GUCCI VANITY BAG</p>
						<div className="lower-section">
							<p className="item-price">$2200</p>
							<img
								src="./images/icons/shopping-cart.png"
								alt=""
								onClick={toggleCart}
							/>
						</div>
					</div>
				</div>
				<div className="image6">
					<div className="love-btn">
						<img src="./images/love.png" alt="" />
					</div>
					<img src="./images/image601.png" alt="" />
					<div className="details">
						<p className="item-name">GiINGHAM SHOERT</p>
						<div className="lower-section">
							<p className="item-price">$80</p>
							<img
								src="./images/icons/shopping-cart.png"
								alt=""
								onClick={toggleCart}
							/>
						</div>
					</div>
				</div>
				<div className="image7">
					<div className="love-btn">
						<img src="./images/love.png" alt="" />
					</div>
					<img src="./images/image60.png" alt="" />
					<div className="details">
						<p className="item-name">STIO WOMEN&apos;S COLTER</p>
						<div className="lower-section">
							<p className="item-price">$53</p>
							<img
								src="./images/icons/shopping-cart.png"
								alt=""
								onClick={toggleCart}
							/>
						</div>
					</div>
				</div>
				<div className="image8">
					<div className="love-btn">
						<img src="./images/love.png" alt="" />
					</div>
					<img src="./images/image481.png" alt="" />
					<div className="details">
						<p className="item-name">Calvin Klein Metal Cap</p>
						<div className="lower-section">
							<p className="item-price">$53</p>
							<img
								src="./images/icons/shopping-cart.png"
								alt=""
								onClick={toggleCart}
							/>
						</div>
					</div>
				</div>
			</div>
			<p style={{ textAlign: "right", margin: 0 }}>see all</p>
		</div>
	)
}
export default BestSellers
