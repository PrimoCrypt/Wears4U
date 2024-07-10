import PropTypes from "prop-types"
import BestSellers from "../components/BestSellers"
import BlogView from "../components/BlogView"
import Categories from "../components/Categories"
import Footer from "../components/Footer"
import MainView from "../components/MainView"
import MenCollection from "../components/MenCollection"
import NavBar from "../components/NavBar"
import NewArrivals from "../components/NewArrivals"
import WomenCollection from "../components/WomenCollection"




const HomePage = ({toggleModal, router}) => {
	return (
		<>
			<NavBar toggleModal={toggleModal} router={router}/>
			<MainView />
			<NewArrivals />
			<BestSellers />
			<BlogView />
			<MenCollection />
			<WomenCollection />
			<Categories />
			<Footer />
		</>
	)
}
HomePage.propTypes = {
	toggleModal: PropTypes.func.isRequired,
	router: PropTypes.object.isRequired
}

export default HomePage
