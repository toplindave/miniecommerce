import React, { useContext } from "react";
import "./nav.css";
import { NavLink, Link } from "react-router-dom";
import { CartContext } from "../../feature/ContextProvider";
function Nav() {
	const { cart } = useContext(CartContext);
	return (
		<nav>
			<div className="logo">Munchies Emporium</div>
			<ul className="navigation">
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/product">Product</NavLink>
				</li>
				<li>
					<NavLink to="/contact">Contact</NavLink>
				</li>
			</ul>
			<div className="signin-signup">
				{/* you said you will the stuff here */}
				<div className="nav-cart-container">
					<Link to="/cart">
						<button className="cart-icon">{cart.length}</button>
					</Link>
					<button className="user"> user</button>
				</div>
				<div className="nav-log-in">
					<button className="sign-in-btn">Sign in</button>
					<button className="sign-up-btn">Sign up</button>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
