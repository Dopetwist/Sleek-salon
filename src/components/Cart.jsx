import Icons from "./Icons";

function Cart({ passCart }) {
    const totalItems = passCart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <div className="cart">
            <Icons.ShoppingCart />

            <div className="cart-count">
                <p className="item-count"> 
                    { totalItems }
                </p>
            </div>
        </div>
    )
}

export default Cart;