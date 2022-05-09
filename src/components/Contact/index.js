import React from "react";

function ContactForm() {
    
    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form">
                {/* Name */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                </div>
                {/* Email */}
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" />
                </div>
                {/* Message */}
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows={5} />
                </div>
                {/* Submit Button */}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;