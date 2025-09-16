import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Collections', id: 'collections' },
    { name: 'Technology', id: 'technology' },
    { name: 'Watch Details', id: 'details' },
    { name: 'Store Locator', id: 'stores' },
    { name: 'About Us', id: 'about' },
    { name: 'Contact Us', id: 'contact' }
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <section className="head-menu">
            <div className="logo" onClick={() => scrollToSection('home')}>
              <div className="logo-icon">⌚</div>
              <h2>ALBERTO WATCH</h2>
            </div>
            
            <div className="menu-line">
              <div
                className={`menu-icon ${menuOpen ? 'active' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </section>

          <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} onClick={() => scrollToSection(item.id)}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="full-head">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="animated-bg">
            <div className="floating-element element-1"></div>
            <div className="floating-element element-2"></div>
            <div className="floating-element element-3"></div>
          </div>
        </div>
        
        <div className="hero-content">
          <h1>Discover the World of <span className="gradient-text">Watches</span></h1>
          <p>Explore collections, understand the technology, and find stores near you.</p>
          <button className="cta-button" onClick={() => scrollToSection('collections')}>
            <span>Explore Collections</span>
            <div className="button-glow"></div>
          </button>
        </div>
        
      
      </section>
    </>
  );
}

export default Header;