import React from "react";
import "./product.css";
import productDatas from "../../data/ProductsData";
import ProductCard from "../../component/productcard/ProductCard";
import Footer from "../../component/footer/Footer";

const productDisplay = productDatas.map((productData, id) => {
	return <ProductCard productData={productData} key={id} />;
});

function Product() {
	return (
		<div className="product">
			<section className="first-section">
				<div className="left-container">
					{/* incase you need this container for the burger picture */}
				</div>
				<div className="right-container">
					<h1 className="product-title">Product</h1>
					<h1 className="delight-text">
						Delight Your Taste Buds with Munchies Emporium
					</h1>
					<div className="search">
						<input type="text" className="search-input" />
						<button className="search-input-button">Search</button>
					</div>
				</div>
			</section>
			<section className="second-section">{productDisplay}</section>
			<Footer />
		</div>
	);
}

export default Product;
