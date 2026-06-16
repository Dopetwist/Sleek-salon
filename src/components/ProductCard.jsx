import products from "./ProductList";

function ProductCard({ cart, addToCart, setToast }) {

    // Function to check if product is already in cart
    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    // Function to show toast notification when product is added to cart
    const handleToast = () => {
        setToast({
            message: "✔ Cart updated successfully!",
            type: "success"
        })
    }

    return (
        <div className="grid-container">
            {products.map((item) => (
                <div className="grid-box" key={item.id}>
                    <div className="prod-img">
                        <img src={item.img} alt="Product Image" />
                    </div>

                    <div className="description">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div className="sub">
                            <p className="price">${item.price}</p>
                            <button
                            className={`add-to-cart ${isInCart(item.id) ? "added" : ""}`}
                            onClick={() => {
                                addToCart(item);
                                handleToast();
                            }}
                            > 
                                {isInCart(item.id) ? "✔ Added" : "Add to Cart"} 
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductCard;