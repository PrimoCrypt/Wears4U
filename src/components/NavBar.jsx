import { Link } from "react-router-dom"
import "./NavBar.css"
import PropTypes from 'prop-types'



const NavBar = ({toggleModal, router}) => {

	return (
		<div className="container">
			<div className="promo">
				<p>Promo: Free shipping on every order!!!</p>
			</div>
			<div className="navbar">
				<div className="categories mobile">
					<img src="./images/icons/menu.png" alt="" />
				</div>
				<div className="categories desktop">
					<a href="#">MEN</a>
					<a href="#">WOMEN</a>
					<a href="#">BABY&KIDS</a>
					<a href="#">SALE</a>
				</div>
				<div className="logo">
					<Link to="/" router={router}>
						<img src="./images/icons/logo.png" alt="" />
						<p className="logo-text">
							Wears4<span className="u">U</span>
						</p>
					</Link>
				</div>
				<div className="options">
					<a href="#">
						<span className="search">SEARCH</span>
						<span className="search-icon">
							<img src="./images/icons/search-normal.png" alt="" />
						</span>
					</a>
					<Link  to="/">
						<span className="account">ACCOUNT</span>
						<span className="profile-icon">
							<img src="./images/icons/profile.png" />
						</span>
					</Link>
					<Link to="/cart" className="cart-container" onClick={toggleModal}>
						<span className="cart">CART(4)</span>
						<span className="cart-icon">
							<img src="./images/icons/shopping-cart.png" alt="" />
						</span>
					</Link>
				</div>
			</div>
		</div>
	)
}
NavBar.propTypes = {
	toggleModal: PropTypes.func.isRequired,
	router: PropTypes.object.isRequired
}

export default NavBar
