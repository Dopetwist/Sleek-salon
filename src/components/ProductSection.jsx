import ProductCard from "./ProductCard";

function ProductSection({ addToCart }) {

    return (
        // Product section design

        <section className="products" id="products">
            <h2 className="heading">Hair <span>Products</span></h2>

            <ProductCard
                addToCart={addToCart}
            />
        </section>
    )
}

export default ProductSection;