import "./App.css"
import BestSellers from "./components/BestSellers.jsx"
import BlogView from "./components/BlogView.jsx"
import Categories from "./components/Categories.jsx"
import MainView from "./components/MainView.jsx"
import MenCollection from "./components/MenCollection.jsx"
import NavBar from "./components/NavBar"
import NewArrivals from "./components/NewArrivals.jsx"
import WomenCollection from "./components/WomenCollection.jsx"

const App = () => {
	return (
		<div className="app">
			<NavBar />
			<MainView />
			<NewArrivals />
			<BestSellers />
			<BlogView/>
			<MenCollection/>
			<WomenCollection />
			<Categories/>
		</div>
	)
}
export default App
