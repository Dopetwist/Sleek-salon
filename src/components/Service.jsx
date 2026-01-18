import { services } from "../../index";

function Service() {
    return (
        // Services section design

        <section className="services" id="services">
            <h2 className="heading"><span>Our</span> Services</h2>

            <div className="services-container">

                {services.map((item) => (
                    <div className="services-box" key={item.id}>
                        <img src={item.img} alt="" className="box-image" />

                        <div className="box-texts">
                            <h3> {item.title} </h3>
                            <p> {item.description} </p>
                            
                            <a href="#" className="btn">Read More</a>
                        </div>
                    </div>
                ))}

                {/* <div className="services-box barbing">
                    <h3>Barbing</h3>
                    <p> </p>
                    
                    <a href="#" className="btn">Read More</a>
                </div>

                <div className="services-box braiding">
                    <h3>Braiding</h3>
                    <p></p>
                    
                    <a href="#" className="btn">Read More</a>
                </div>

                <div className="services-box pedicure">
                    <h3></h3>
                    <p></p>
                    
                    <a href="#" className="btn">Read More</a>
                </div>

                <div className="services-box tinting">
                    <h3>Tinting</h3>
                    <p></p>
                    
                    <a href="#" className="btn">Read More</a>
                </div>

                <div className="services-box dreadlocks">
                    <h3>Dreadlocks</h3>
                    <p>
                    </p>

                    <a href="#" className="btn">Read More</a>
                </div>

                <div className="services-box treatments">
                    <h3>Hair Treatments</h3>
                    <p></p>

                    <a href="#" className="btn">Read More</a>
                </div> */}
            </div>
        </section>
    )
}

export default Service;