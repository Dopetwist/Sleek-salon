import React from "react";

function Product(props) {
    return (
        // Product section design

        <section class="products" id="products">
            <h2 class="heading">Hair <span>Products</span></h2>

            <div class="grid-container">
                <div class="grid-box">
                    <div class="prod-img">
                        <img src={props.image} alt="" />
                    </div>

                    <div class="description">
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                        <div class="sub">
                            <p class="price">{props.price}</p>
                            <button>Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product;