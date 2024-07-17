import PropTypes from "prop-types"

const EachItem = ({ id, name, photos, current_price }) => {
	const photoPath = photos[0].url
	const price = current_price[0].USD ? current_price[0].USD : 0
	const finalPrice = price[0] ? price[0] : 0

	return (
		<>
			<div className="image">
				<div className="love-btn">
					<img src="./images/love.png" alt="" />
				</div>
				<img src={"https://api.timbu.cloud/images/" + photoPath} alt="" />
				<div className="details">
					<p className="item-name">{name}</p>
					<div className="lower-section">
						<p className="item-price">${finalPrice}</p>
						<img src="./images/icons/shopping-cart.png" alt="" onClick={console.log(id)} />
					</div>
				</div>
			</div>
		</>
	)
}

EachItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
    current_price: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired
}
export default EachItem