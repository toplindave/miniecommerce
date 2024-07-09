import React, { useContext } from "react";
import { totalItem, totalPrice } from "../../feature/CartReducer";
import { CartContext } from "../../feature/ContextProvider";
import CartProduct from "../../component/cartproduct/CartProduct";
function Cart() {
	const { cart } = useContext(CartContext);
	const cartMap = cart.map((p) => <CartProduct product={p} />);
	return (
		<div className="cart">
			<div className="cart-nav">
				<h1 className="cart-nav-h1">Munchies Emporium</h1>
				<div className="cart-nav-search">
					<input type="text" />
					<button>Search</button>
				</div>
				<div className="cart-list">
					<button>cart{cart.length}</button>
					<button>H</button>
				</div>
			</div>
			<h1 className="cart-header">Shopping Cart</h1>
			<div className="cart-item-container">{cartMap}</div>
		</div>
	);
}

export default Cart;
