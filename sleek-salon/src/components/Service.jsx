import React from "react";

function Service() {
    return (
        // Services section design

        <section className="services" id="services">
            <h2 className="heading"><span>Our</span> Services</h2>

            <div className="services-container">
                <div className="services-box barbing">
                    <h3>Barbing</h3>
                    <p>We render classic hair cuts to males bringing out the handsomeness in them. </p>
                    
                    <a href="#" className="btn">Read More</a>
                </div>

                <div className="services-box braiding">
                    <h3>Braiding</h3>
                    <p>Get the beauty you desire in braids by our female hair stylists.</p>
                    
                    <a href="#" className="btn">Read More</a>
                </div>

                <div className="services-box pedicure">
                    <h3>Pedicure/Manicure</h3>
                    <p>The neatness of your nails are also our priority. Our Pedicure and Manicure services is top-notch.</p>
                    
                    <a href="#" className="btn">Read More</a>
                </div>

                <div className="services-box tinting">
                    <h3>Tinting</h3>
                    <p>All hair color tints are available at our salon. Our tints colors don't fade easily on hairs.</p>
                    
                    <a href="#" className="btn">Read More</a>
                </div>

                <div className="services-box dreadlocks">
                    <h3>Dreadlocks</h3>
                    <p>We give our fresh clients wonderful Dreadlocks and also relock and 
                        beautify it during maintainance afterwards.
                    </p>

                    <a href="#" className="btn">Read More</a>
                </div>

                <div className="services-box treatments">
                    <h3>Hair Treatments</h3>
                    <p>We offer different types of hair treatments making use of our effective hair products.</p>

                    <a href="#" className="btn">Read More</a>
                </div>
            </div>
        </section>
    )
}

export default Service;