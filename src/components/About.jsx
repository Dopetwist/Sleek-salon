function About() {
    return (
        // About section design

        <section className="about" id="about">
            <h2 className="heading">About <span>Us</span></h2>
            
            <div className="about-sub">
                <div className="about-img">
                    <img src="images/logo.jpeg" alt="Logo Image" />
                </div>

                <div className="about-content">
                    <p>At our salon, we believe beauty is a form of self-expression, 
                        and our mission is to help our clients unleash their creativity and express 
                        their unique style through our services. We are passionate about beauty and are committed to staying
                        on top of the latest trends and techniques to bring you the very best hair, makeup, and skin care services.
                    </p>
                        
                    <a href="#" className="btn">Read More</a>

                </div>
            </div>
        </section>
    )
}

export default About;