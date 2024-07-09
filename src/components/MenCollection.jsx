import "./MenCollection.css"

const MenCollection = () => {
	return (
		<div className="container-mc">
			<div className="heading">
				<p className="heading1">men</p>
				<h1 className="heading2">COLLECTION</h1>
			</div>
			<div className="content">
				<div className="main-image">
					<img src="./images/men-collection/image63.png" alt="Latest arrivals" />
				</div>
				<div className="image1">
					<div className="love-btn">
						<img src="./images/love.png" alt="" />
					</div>
					<img src="./images/men-collection/image631.png" alt="" />
					<div className="details">
						<p className="item-name">QUIET LUXURY HOODIE</p>
						<p className="item-price">$500</p>
					</div>
				</div>
				<div className="image2">
					<div className="love-btn">
						<img src="./images/love.png" alt="" />
					</div>
					<img src="./images/men-collection/image47_1.png" alt="" />
					<div className="details">
						<p className="item-name">LEATHER BIKER JACKET</p>
						<p className="item-price">$128</p>
					</div>
				</div>
				<div className="image3">
					<div className="love-btn">
						<img src="./images/love.png" alt="" />
					</div>
					<img src="./images/men-collection/image46_1.png" alt="" />
					<div className="details">
						<p className="item-name">BERSHKA CAPRI HOODIE</p>
						<p className="item-price">$23</p>
					</div>
				</div>
				<div className="image4">
					<div className="love-btn">
						<img src="./images/love.png" alt="" />
					</div>
					<img src="./images/men-collection/image61.png" alt="" />
					<div className="details">
						<p className="item-name">BROWN JOGGERS</p>
						<p className="item-price">$26</p>
					</div>
				</div>
			</div>
			<p style={{ textAlign: "left", fontWeight: 700 }}>see more</p>
		</div>
	)
}
export default MenCollection
