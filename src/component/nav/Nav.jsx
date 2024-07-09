import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
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
					<button className="cart-icon">cart</button>
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
