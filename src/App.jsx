import "./App.css"
import MainView from "./components/MainView.jsx"
import NavBar from "./components/NavBar"
import NewArrivals from "./components/NewArrivals.jsx"

const App = () => {
	return (
		<div className="app">
			<NavBar />
			<MainView />
			<NewArrivals />
		</div>
	)
}
export default App
