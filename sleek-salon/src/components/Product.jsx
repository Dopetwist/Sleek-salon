import React from "react";
import { productsPhotos } from "../../index";

function Product() {
    return (
        // Product section design

        <section class="products" id="products">
            <h2 class="heading">Hair <span>Products</span></h2>

            <div class="grid-container">
                {productsPhotos.map((item) => (
                    <div class="grid-box">
                        <div class="prod-img">
                            <img src={item.img} alt="Product Image" />
                        </div>

                        <div class="description">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div class="sub">
                                <p class="price">{item.price}</p>
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