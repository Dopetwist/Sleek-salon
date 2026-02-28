import products from "./ProductList";

function ProductCard({ addToCart }) {
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
                            <p className="price">{item.price}</p>
                            <button
                            onClick={() => addToCart(item)}
                            > 
                                Add to Cart 
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductCard;