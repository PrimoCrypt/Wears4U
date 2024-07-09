import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"
import HomePage from "./pages/HomePage"
import CartPage from "./pages/CartPage"
import CheckoutView from "./components/CheckoutView"

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/cart",
		element: <CartPage/>,
	},
	{
		path: "/checkout",
		element: <CheckoutView/>
	}
])

const App = () => {
	return (
		<div className="app">
			<RouterProvider router={router} />
		</div>
	)
}
export default App
