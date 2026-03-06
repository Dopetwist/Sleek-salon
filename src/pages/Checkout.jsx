
function Checkout({ cart }) {
    console.log(cart);

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
            0
        );

    return (
        <div>
            <h1>{JSON.stringify(cart)}</h1>
            <h2> Checkout 🛒 </h2>

            {cart.map((item) => (
                <div key={item.id}>
                    {console.log(item)}

                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price * item.quantity}</p>
                </div>
            ))}

            <h2>Total: ${total}</h2>
        </div>
    )
}

export default Checkout;