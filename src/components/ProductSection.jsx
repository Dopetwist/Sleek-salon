import ProductCard from "./ProductCard";

function ProductSection({ cart, addToCart, setToast }) {

    return (
        // Product section design

        <section className="products" id="products">
            <h2 className="heading">Hair <span>Products</span></h2>

            <ProductCard
                cart={cart}
                addToCart={addToCart}
                setToast={setToast}
            />
        </section>
    )
}

export default ProductSection;