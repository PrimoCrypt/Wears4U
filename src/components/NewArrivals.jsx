import { useGlobalContext } from "../context/context"
import EachItem from "./EachItem"
import "./NewArrivals.css"

// eslint-disable-next-line react/prop-types
const NewArrivals = () => {
	const { items } = useGlobalContext()
	const itemsArray = Array.from(items.entries())
	const newArrivalItems = itemsArray.slice(6, 10)
	// console.log(items)
	// const toggleCart = () => {
	// 	// console.log(modal)
	// 	toggleModal(1)
	// }
	return (
		<div className="container-n-a">
			<h1 className="heading">NEW ARRIVALS</h1>
			<div className="content">
				<div className="main-image">
					<img src="./images/Frame-1000003467.png" alt="Latest arrivals" />
				</div>
				{newArrivalItems.map((item) => {
					const [id, eachItem] = item
					return <EachItem key={id} {...eachItem} />
				})}
			</div>
			<p style={{ textAlign: "right", margin: 0 }}>see all</p>
		</div>
	)
}
export default NewArrivals
