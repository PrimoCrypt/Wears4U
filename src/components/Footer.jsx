import "./Footer.css"

const Footer = () => {
  return (
		<div className="footer">
			<div className="content">
				<div className="section1">
					<h4>COMPANY</h4>
					<a href="#">About Us</a>
					<a href="#">Faq</a>
					<a href="#">Contact Us</a>
				</div>
				<div className="section2">
					<h4>COLLABORATE</h4>
					<a href="#">Privacy Policy</a>
					<a href="#">@Dada Princess</a>
					<a href="#">@RhythmicDevLeo</a>
					<a href="#">@Kansoldev</a>
				</div>
				<div className="section3">
					<h4>SHOP</h4>
					<a href="#">How to Order</a>
					<a href="#">Track your Order</a>
					<a href="#">Return & Exchnages</a>
				</div>
				<div className="section4">
					<h4>SOCIAL MEDIA</h4>
					<a href="#">Facebook</a>
					<a href="#">LinkedIn</a>
					<a href="#">Twitter</a>
					<a href="#">Instagram</a>
				</div>
                <div className="section5">
                    <h4>NEWSLETTER</h4>
                    <p>Sign up for our Newsletter and Receive $10 off your first order</p>
                    <input type="text" placeholder="Your Email" />
                </div>
			</div>
            <p className="license">@2024 HNG-ALL RIGHTS RESERVES</p>
		</div>
	)
}
export default Footer