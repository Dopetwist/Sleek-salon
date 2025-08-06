import React from "react";
import { productsPhotos } from "../../index";

function Product() {
    return (
        // Product section design

        <section className="products" id="products">
            <h2 className="heading">Hair <span>Products</span></h2>

            <div className="grid-container">
                {productsPhotos.map((item) => (
                    <div className="grid-box" key={item.id}>
                        <div className="prod-img">
                            <img src={item.img} alt="Product Image" />
                        </div>

                        <div className="description">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className="sub">
                                <p className="price">{item.price}</p>
                                <button>Order</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Product;