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
					<a href="#">SALES</a>
				</div>
				<div className="logo">Wears4U</div>
				<div className="options">
					<a href="#">SEARCH</a>
					<a href="#">ACCOUNT</a>
					<a href="#">CART(4)</a>
				</div>
			</div>
		</div>
	)
}
export default NavBar
