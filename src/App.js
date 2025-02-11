import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/product/Product";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Nav from "./component/nav/Nav";
import Cart from "./pages/cart/Cart";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/product" element={<Product />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
