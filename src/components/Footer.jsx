import React, { useState } from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "Collections", id: "collections" },
    { name: "Technology", id: "technology" },
    { name: "Watch Details", id: "details" },
  ];

  const services = [
    { name: "Store Locator", id: "stores" },
    { name: "About Us", id: "about" },
    { name: "Contact", id: "contact" },
    { name: "Support", action: () => scrollToSection("contact") },
  ];

  const socialLinks = [
    { name: "Instagram", icon: <FaInstagram />, url: "#" },
    { name: "Facebook", icon: <FaFacebookF />, url: "#" },
    { name: "Twitter", icon: <FaTwitter />, url: "#" },
    { name: "LinkedIn", icon: <FaLinkedinIn />, url: "#" },
    { name: "YouTube", icon: <FaYoutube />, url: "#" },
  ];

  const legalLinks = [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "Return Policy",
    "Warranty Information",
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <div className="logo-icon">⌚</div>
                <h3>ALBERTO WATCH</h3>
              </div>
              <p className="footer-description">
                Your premier destination for luxury timepieces and watch
                expertise. Discover the perfect blend of tradition and
                innovation.
              </p>

              <div className="footer-stats">
                <div className="stat">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">Years</span>
                </div>
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Models</span>
                </div>
                <div className="stat">
                  <span className="stat-number">10K+</span>
                  <span className="stat-label">Customers</span>
                </div>
              </div>

              <div className="footer-social">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="social-icon hover-lift"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="footer-link"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() =>
                        service.id
                          ? scrollToSection(service.id)
                          : service.action()
                      }
                      className="footer-link"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="footer-section">
              <h4 className="footer-heading">Stay Updated</h4>
              <p className="newsletter-description">
                Subscribe to our newsletter for the latest watch collections,
                exclusive offers, and horological insights.
              </p>

              {!isSubscribed ? (
                <form
                  className="newsletter-form"
                  onSubmit={handleNewsletterSubmit}
                >
                  <div className="newsletter-input-wrapper">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="newsletter-input"
                      required
                    />
                    <button type="submit" className="newsletter-btn">
                      Subscribe
                    </button>
                  </div>
                </form>
              ) : (
                <div className="newsletter-success">
                  <div className="success-icon">✅</div>
                  <p>Thank you for subscribing!</p>
                </div>
              )}

              <div className="newsletter-benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">🎯</span>
                  <span>Exclusive Offers</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">📱</span>
                  <span>New Arrivals First</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">💎</span>
                  <span>Expert Insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="footer-contact">
          <div className="contact-items">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>123 Watch Street, Time City, TC 12345</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>info@albertowatch.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕒</span>
              <span>Mon-Fri: 9AM-6PM</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2025 ALBERTO WATCH. All rights reserved.</p>
              <p className="tagline">Crafted with precision since 1998</p>
            </div>

            <div className="legal-links">
              {legalLinks.map((link, index) => (
                <button key={index} className="legal-link">
                  {link}
                </button>
              ))}
            </div>

            <div className="footer-badges">
              <div className="badge">
                <span className="badge-icon">🔒</span>
                <span>Secure Shopping</span>
              </div>
              <div className="badge">
                <span className="badge-icon">🚚</span>
                <span>Free Shipping</span>
              </div>
              <div className="badge">
                <span className="badge-icon">🛡️</span>
                <span>Authentic Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        className="back-to-top"
        onClick={() => scrollToSection("home")}
        title="Back to top"
      >
        ↑
      </button>
    </footer>
  );
}

export default Footer;
