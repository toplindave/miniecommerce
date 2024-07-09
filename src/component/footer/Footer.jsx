import React from "react";
import "./footer.css";
import { ReactComponent as Copyright } from "./copyright.svg";
import { ReactComponent as Chat } from "./footerchat.svg";
import { NavLink } from "react-router-dom";

function Footer() {
	return (
		<div className="footer">
			<div className="footer-top-container">
				<div className="footer-h1">Contact us</div>
				<div className="footer-top-sub-container">
					<div className="footer-address">
						@ Lane C, fireman Avenue, Ladoke Estate, Onipanu Lagos, Nigeria For
						more details, call +234(0)-816-9405-727
					</div>
					<div className="footer-chat">
						<Chat />
					</div>
				</div>
			</div>
			<div className="footer-down-container">
				<h1 className="footer-logo">Munchies Emporium</h1>
				<ul className="footer-navigation">
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
				<p className="footer-copyright">
					<Copyright /> Copyright 2024
				</p>
			</div>
		</div>
	);
}

export default Footer;
