import React from "react";
import "./productcard.css";
import { ReactComponent as Star } from "./stars.svg";

function ProductCard({ productData }) {
	return (
		<div className="product-card">
			<div className="card">
				<div className="card-img">{productData.img}</div>
				<div className="price-and-star">
					<p className="price">{productData.price}</p>
					<Star />
				</div>
				<div className="name-and-btn">
					<p className="product-name">{productData.title}</p>
					<button>Add to Cart</button>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
