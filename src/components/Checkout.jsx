
function Checkout({ cart }) {
    return (
        <div>
            {cart.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price * item.quantity}</p>
                </div>
            ))}
        </div>
    )
}

export default Checkout;