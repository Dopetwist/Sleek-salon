import Icons from "./Icons";

function Cart() {
    return (
        <div className="cart">
            <Icons.ShoppingCart />

            <div className="cart-count">
                <p className="item-count"> 1 </p>
            </div>
        </div>
    )
}

export default Cart;