import "./App.css"
import BestSellers from "./components/BestSellers.jsx"
import BlogView from "./components/BlogView.jsx"
import MainView from "./components/MainView.jsx"
import NavBar from "./components/NavBar"
import NewArrivals from "./components/NewArrivals.jsx"

const App = () => {
	return (
		<div className="app">
			<NavBar />
			<MainView />
			<NewArrivals />
			<BestSellers />
			<BlogView/>
		</div>
	)
}
export default App
