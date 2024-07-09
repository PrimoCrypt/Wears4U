import { Link } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
	return (
		<div className="container">
			<div className="promo">
				<p>Promo: Free shipping on every order!!!</p>
			</div>
			<div className="navbar">
				<div className="categories">
					<a href="#">MEN</a>
					<a href="#">WOMEN</a>
					<a href="#">BABY&KIDS</a>
					<a href="#">SALE</a>
				</div>
				<div className="logo">
					<img src="./images/icons/logo.png" alt="" />
					<Link to="/"><p className="logo-text">Wears4<span className="u">U</span></p></Link>
				</div>
				<div className="options">
					<a href="#">SEARCH</a>
					<a href="#">ACCOUNT</a>
					<Link to="/cart">CART(4)</Link>
				</div>
			</div>
		</div>
	)
}
export default NavBar
