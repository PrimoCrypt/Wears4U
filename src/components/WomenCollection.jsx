/* eslint-disable react/prop-types */
import "./WomenCollection.css"
import { useGlobalContext } from "../context/context"
import EachItem from "./EachItem"

const WomenCollection = () => {
	const { items } = useGlobalContext()
	const itemsArray = Array.from(items.entries())
	const womenCollectionlItems = itemsArray.slice(10, 14)
	// console.log(modal)
	// const toggleCart = () => {
	// 	console.log(modal)
	// 	toggleModal(1)
	// }
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
				{womenCollectionlItems.map((item) => {
					const [id, eachItem] = item
					return <EachItem key={id} {...eachItem} />
				})}
			</div>
			<p style={{ textAlign: "left", fontWeight: 700 }}>see more</p>
		</div>
	)
}
export default WomenCollection
