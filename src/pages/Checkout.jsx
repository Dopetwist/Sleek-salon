import Icons from "../components/Icons";

function Checkout({ cart }) {

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
            0
        );

    return (
        <section className="checkout">
            {total > 0 ? 
                <>
                    <div className="checkout-box">
                        <h2 className="checkout-text"> Checkout 🛒 </h2>

                        <div className="item-parent">
                            {cart.map((item, index) => (
                                <div key={item.id} className="item-box">
                                    <p className="count"> { index + 1 } </p>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p className="checkout-price">
                                        <strong>Price:</strong> ${item.price * item.quantity}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <h2 className="total">Total: ${total}</h2>

                        <button id="payment-btn">
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

export default Checkout;