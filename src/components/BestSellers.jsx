/* eslint-disable react/prop-types */
import { useGlobalContext } from "../context/context"
import "./BestSellers.css"
import EachItem from "./EachItem"

const BestSellers = () => {
	const { items } = useGlobalContext()
	const itemsArray = Array.from(items.entries())
	const bestSellerItems = itemsArray.slice(0, 8)
	// console.log(modal)
	// const toggleCart = () => {
	// 	console.log(modal)
	// 	toggleModal(1)
	// }
	return (
		<div className="container-bs">
			<h1 className="heading">BEST SELLERS</h1>
			<div className="content">
					{bestSellerItems.map((item) => {
						const [id, eachItem] = item
						return <EachItem key={id} {...eachItem} />
					})}
			</div>
			<p style={{ textAlign: "right", margin: 0 }}>see all</p>
		</div>
	)
}
export default BestSellers
