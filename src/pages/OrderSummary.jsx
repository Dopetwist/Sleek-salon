import Icons from "../components/Icons";

function OrderSummary({ cart, setCart }) {

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
            0
        );

    const roundedTotal = total.toFixed(2); // Round number to 2 decimal  places

    const handleCheckout = () => {
        alert("Order completed successfully!");

        setCart([]); // Clear cart from local storage
    }

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
                                                    > - </button>
                                                    <button
                                                    id="increase"
                                                    className="quantity-button"
                                                    > + </button>
                                                </div>
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

                        <button 
                        id="payment-btn"
                        className="selected"
                        onClick={handleCheckout}
                        >
                            <Icons.ArrowRight id="arrow-right" /> Proceed to Payment
                        </button>
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