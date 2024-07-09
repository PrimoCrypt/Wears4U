import "./NewArrivals.css"

const NewArrivals = () => {
	return (
		<div className="container-n-a">
			<h1 className="heading">NEW ARRIVALS</h1>
			<div className="content">
				<div className="main-image">
					<img src="./images/Frame-1000003467.png" alt="Latest arrivals" />
				</div>
				<div className="image1">
					<div className="love-btn">
						<img src="./images/love.png" alt="" />
					</div>
					<img src="./images/image47.png" alt="" />
					<div className="details">
						<p className="item-name">LEATHER BIKER JACKET</p>

						<div className="lower-section">
							<p className="item-price">$128</p>
							<img src="./images/icons/shopping-cart.png" alt="" />
						</div>
					</div>
				</div>
				<div className="image2">
					<div className="love-btn">
						<img src="./images/love.png" alt="" />
					</div>
					<img src="./images/image46.png" alt="" />
					<div className="details">
						<p className="item-name">QUIET LUXURY HOODIE</p>
						<div className="lower-section">
							<p className="item-price">$500</p>
							<img src="./images/icons/shopping-cart.png" alt="" />
						</div>
					</div>
				</div>
				<div className="image3">
					<div className="love-btn">
						<img src="./images/love.png" alt="" />
					</div>
					<img src="./images/image461.png" alt="" />
					<div className="details">
						<p className="item-name">BROWN SWEATER</p>
						<div className="lower-section">
							<p className="item-price">$126</p>
							<img src="./images/icons/shopping-cart.png" alt="" />
						</div>
					</div>
				</div>
				<div className="image4">
					<div className="love-btn">
						<img src="./images/love.png" alt="" />
					</div>
					<img src="./images/image471.png" alt="" />
					<div className="details">
						<p className="item-name">SWEAT SHIRT</p>
						<div className="lower-section">
							<p className="item-price">$53</p>
							<img src="./images/icons/shopping-cart.png" alt="" />
						</div>
					</div>
				</div>
			</div>
			<p style={{ textAlign: "right", margin: 0 }}>see all</p>
		</div>
	)
}
export default NewArrivals
