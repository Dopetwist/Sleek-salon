import React from "react";

function Product() {
    return (
        // Product section design

    <section class="products" id="products">
        <h2 class="heading">Hair <span>Products</span></h2>

        <div class="grid-container">
            <div class="grid-box">
                <div class="prod-img">
                    <img src="images/product1.jpeg" alt="" />
                </div>

                <div class="description">
                    <h3>BEST SHAMPOO AND CONDITIONER FOR DRY HAIR</h3>
                    <p>Herbal Essences BioRenew Hydrate Coconut Milk Shampoo and Conditioner</p>
                    <div class="sub">
                        <p class="price">$14.99</p>
                        <button>Order</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Product;