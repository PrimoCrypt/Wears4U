import BestSellers from "../components/BestSellers"
import BlogView from "../components/BlogView"
import Categories from "../components/Categories"
import Footer from "../components/Footer"
import MainView from "../components/MainView"
import MenCollection from "../components/MenCollection"
import NavBar from "../components/NavBar"
import NewArrivals from "../components/NewArrivals"
import WomenCollection from "../components/WomenCollection"

const HomePage = () => {
	return (
		<>
			<NavBar />
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

export default HomePage
