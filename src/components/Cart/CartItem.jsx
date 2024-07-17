/* eslint-disable no-unused-vars */

import { useGlobalContext } from "../../context/context"

/* eslint-disable react/prop-types */
const CartItem = ({name, id,  quantity, photos, current_price}) => {
	const photoPath = photos[0].url
	const price = current_price[0].USD ? current_price[0].USD : 0
	const finalPrice = price[0] ? price[0] : 0
	const {removeItem} = useGlobalContext()

	// console.log(current_price[0].USD[0])
	return (
		<div className="item">
			<div className="item-detail">
				<img src={ "https://api.timbu.cloud/images/"+ photoPath } alt="" />
				<div className="title">{name}</div>
			</div>
			<div className="quantity">
				<button className="negative">-</button>
				<p className="value">1</p>
				<button className="positive">+</button>
			</div>
			<p className="price">${finalPrice}</p>
			<p className="remove-item" onClick={()=>{
				removeItem(id)
			}}>Remove</p>
		</div>
	)
}
export default CartItem
