import services from "../components/ServiceList";

function Service() {
    return (
        // Services section design

        <section className="services" id="services">
            <h2 className="heading"><span>Our</span> Services</h2>

            <div className="services-container">

                {services.map((item) => (
                    <div className={`services-box ${item.name}`} key={item.id}>

                        <div className="box-texts">
                            <h3> {item.title} </h3>
                            <p> {item.description} </p>
                            
                            <a href="#" className="btn">Read More</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Service;