
function Checkout({ cart }) {
    console.log(cart);

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
            0
        );

    return (
        <section>
            {total > 0 ? 
                <>
                    <div>
                        <h2> Checkout 🛒 </h2>

                        {cart.map((item) => (
                            <div key={item.id}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: ${item.price * item.quantity}</p>
                            </div>
                        ))}

                        <h2>Total: ${total}</h2>
                    </div>
                </>
            : <h3> Your cart is empty. Add new items to checkout! </h3>
            }
        </section>
    )
}

export default Checkout;