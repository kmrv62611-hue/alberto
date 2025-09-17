import React, { useState } from "react";
import "./css/Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          inquiryType: "general",
        });
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Our Headquarters",
      details: [
        "123 Watch Street, Time City, TC 12345",
        "Open Mon-Fri: 9AM-6PM",
      ],
      action: "Get Directions",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "Available 24/7 for urgent inquiries"],
      action: "Call Now",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Support",
      details: ["info@albertowatch.com", "Response within 24 hours"],
      action: "Send Email",
    },
  ];

  const socialLinks = [
    { name: "Instagram", icon: <FaInstagram />, handle: "@albertowatch" },
    { name: "Facebook", icon: <FaFacebookF />, handle: "/albertowatch" },
    { name: "Twitter", icon: <FaTwitter />, handle: "@albertowatch" },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      handle: "/company/alberto-watch",
    },
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "sales", label: "Sales & Products" },
    { value: "support", label: "Customer Support" },
    { value: "repair", label: "Watch Repair" },
    { value: "wholesale", label: "Wholesale & B2B" },
    { value: "press", label: "Press & Media" },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2 className="contact-heading">Get in Touch</h2>
          <p className="contact-subtitle">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-header">
              <h3>Contact Information</h3>
              <p>Choose the best way to reach us</p>
            </div>

            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-card hover-lift">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                    <button className="contact-action-btn">
                      {info.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-section">
              <h4>Follow Us</h4>
              <p>Stay updated with our latest collections and news</p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <div key={index} className="social-link hover-lift">
                    <div className="social-icon">{social.icon}</div>
                    <div className="social-info">
                      <div className="social-name">{social.name}</div>
                      <div className="social-handle">{social.handle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="business-hours">
              <h4>Business Hours</h4>
              <div className="hours-list">
                <div className="hours-item">
                  <span className="day">Monday - Friday</span>
                  <span className="time">9:00 AM - 6:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Saturday</span>
                  <span className="time">10:00 AM - 4:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Sunday</span>
                  <span className="time">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            {!isSubmitted ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-header">
                  <h3>Send Us a Message</h3>
                  <p>
                    Fill out the form below and we'll get back to you shortly
                  </p>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="inquiryType">Inquiry Type</label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <div className="form-footer">
                  <p className="privacy-note">
                    By submitting this form, you agree to our Privacy Policy and
                    Terms of Service.
                  </p>
                  <button
                    type="submit"
                    className={`submit-btn ${isLoading ? "loading" : ""}`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="loading-spinner"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="btn-arrow">→</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="success-message">
                <div className="success-icon">✅</div>
                <h3>Message Sent Successfully!</h3>
                <p>
                  Thank you for contacting us. We've received your message and
                  will get back to you within 24 hours.
                </p>
                <div className="success-actions">
                  <button
                    className="back-btn"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="contact-faq">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>What are your store hours?</h4>
              <p>
                Our stores are typically open Monday-Friday 10AM-8PM, Saturday
                10AM-9PM, and Sunday 12PM-6PM. Hours may vary by location.
              </p>
            </div>
            <div className="faq-item">
              <h4>Do you offer watch repair services?</h4>
              <p>
                Yes, we provide comprehensive watch repair services including
                battery replacement, strap adjustment, and restoration by
                certified horologists.
              </p>
            </div>
            <div className="faq-item">
              <h4>What is your return policy?</h4>
              <p>
                We offer a 30-day return policy for unworn watches in original
                condition with all packaging and documentation.
              </p>
            </div>
            <div className="faq-item">
              <h4>Do you authenticate pre-owned watches?</h4>
              <p>
                All our pre-owned watches go through rigorous authentication by
                our certified experts before being added to our collection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
