import React, { useContext } from "react";
import "./productcard.css";
import { ReactComponent as Star } from "./stars.svg";
import { CartContext } from "../../feature/ContextProvider";
function ProductCard({ productData }) {
	const { dispatch } = useContext(CartContext);
	return (
		<div className="product-card">
			<div className="card">
				<div className="card-img">{productData.img}</div>
				<div className="price-and-star">
					<p className="price">${productData.price}</p>
					<Star />
				</div>
				<div className="name-and-btn">
					<p className="product-name">{productData.title}</p>
					<button
						onClick={() => dispatch({ type: "Add", productData: productData })}>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
