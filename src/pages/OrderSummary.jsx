import { useNavigate } from "react-router";
import Icons from "../components/Icons";

function OrderSummary({ cart, setCart }) {

    const navigate = useNavigate();

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
            0
        );

    const roundedTotal = total.toFixed(2); // Round number to 2 decimal  places

    const clearCart = () => {
        setCart([]); // Clear cart from local storage
    }

    // Remove item from cart and show toast
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    }

    const removeButtonToast = () => {
        setToast({
            message: "✔ Product removed from cart!",
            type: "success"
        })
    }

    // Increase quantity of items in cart
    const increaseQuantity = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    // Decrease quantity of items in cart
    const decreaseQuantity = (id) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0) // remove if quantity = 0
        );
    };

    return (
        <section className="checkout">
            {total > 0 ? 
                <>
                    <div className="checkout-box">
                        <h2 className="checkout-text"> Checkout 🛒 </h2>

                        <div className="item-parent">
                            {cart.map((item, index) => (
                                <div key={item.id} className="item-box">
                                    <div className="count">
                                        <p> { index + 1 } </p>
                                    </div>
                                    <div className="product-item">
                                        <div className="item-img">
                                            <img src={item.img} height={100} width={100} alt="Product Image" />
                                        </div>
                                        <div className="inner-item">
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                            <div className="quantity-box">
                                                <p>Quantity: {item.quantity}</p>
                                                <div className="quantity-btns">
                                                    <button 
                                                    id="decrease" 
                                                    className="quantity-button"
                                                    onClick={() => {
                                                        decreaseQuantity(item.id);
                                                        /* handleToast(); */
                                                    }}
                                                    disabled={item.quantity === 1} // Disable button if quantity is 1
                                                    > - </button>
                                                    <button
                                                    id="increase"
                                                    className="quantity-button"
                                                    onClick={() => {
                                                        increaseQuantity(item.id);
                                                        /* handleToast(); */
                                                    }}
                                                    > + </button>
                                                </div>

                                                <p 
                                                id="remove"
                                                onClick={() => {
                                                    removeFromCart(item.id);
                                                    /* removeButtonToast(); */
                                                }}
                                                >
                                                    Remove item
                                                </p>
                                            </div>
                                            <p className="checkout-price">
                                                <strong>Price:</strong> ${item.price * item.quantity}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="total">Total: ${roundedTotal}</h2>

                        <div className="clear-proceed-buttons">
                            <button
                            className="clear-cart"
                            onClick={clearCart}
                            >
                            Clear Cart
                            </button>
                            
                            <button 
                            className="payment-btn"
                            onClick={() => navigate("/checkout")}
                            >
                                Proceed to Payment <Icons.ArrowRight id="arrow-right" />
                            </button>
                        </div>
                    </div>
                </>
            : <h3 className="empty-cart"> 
                Your cart is empty. <br /> Add new items to checkout! 
                </h3>
            }
        </section>
    )
}

export default OrderSummary;