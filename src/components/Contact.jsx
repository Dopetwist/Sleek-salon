
function Contact() {
    return (
        // Contact Section design

        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Us!</span></h2>

            <div className="contact-container">
                <div className="contact-box">
                    <form action="#">
                        <div className="input-box">
                            <input type="text" placeholder="Full Name" required />
                            <input type="email" placeholder="Email Address" required />
                        </div>
                        <div className="input-box">
                            <input type="number" placeholder="Phone Number" required />
                            <input type="text" list="yourgender" id="gender" name="gender" placeholder="Gender" required />
                        </div>
                        <datalist id="yourgender">
                            <option value="Male"></option>
                            <option value="Female"></option>
                        </datalist>

                        <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                        <button>Send message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;