
function Checkout({ cart }) {
    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
            0
        );

    return (
        <div>
            {cart.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price * item.quantity}</p>

                    <h2>Total: ${total}</h2>
                </div>
            ))}
        </div>
    )
}

export default Checkout;