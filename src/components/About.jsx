import React from "react";
import "./css/About.css";

function About() {
  const stats = [
    { number: "25+", label: "Years Experience", icon: "🏆" },
    { number: "500+", label: "Watch Models", icon: "⌚" },
    { number: "50+", label: "Global Partners", icon: "🌍" },
    { number: "10K+", label: "Happy Customers", icon: "😊" },
  ];

  const values = [
    {
      id: 1,
      icon: "💎",
      title: "Quality Excellence",
      description:
        "We partner only with the finest watchmakers and maintain the highest standards of quality in every timepiece we offer.",
    },
    {
      id: 2,
      icon: "🔧",
      title: "Expert Craftsmanship",
      description:
        "Our team of skilled horologists brings decades of experience in watch repair, restoration, and customization.",
    },
    {
      id: 3,
      icon: "🤝",
      title: "Customer First",
      description:
        "Every interaction is built on trust, transparency, and our commitment to helping you find the perfect timepiece.",
    },
    {
      id: 4,
      icon: "🌟",
      title: "Innovation & Heritage",
      description:
        "We honor traditional watchmaking while embracing modern technology and design innovations.",
    },
  ];

  const team = [
    {
      id: 1,
      name: "Alberto Rodriguez",
      position: "Founder & Master Horologist",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&auto=format",
      bio: "With over 30 years in luxury timepieces, Alberto founded the company with a vision to make exceptional watches accessible to all.",
    },
    {
      id: 2,
      name: "Maria Santos",
      position: "Head of Design",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=300&h=300&fit=crop&auto=format",
      bio: "Maria leads our design team, bringing fresh perspectives while respecting the timeless traditions of watchmaking.",
    },
    {
      id: 3,
      name: "James Chen",
      position: "Technical Director",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&auto=format",
      bio: "James oversees our technical operations and ensures every watch meets our exacting standards for precision and reliability.",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Hero About */}
        <div className="about-hero">
          <div className="about-content">
            <div className="about-text">
              <h2 className="about-heading">About ALBERTO WATCH</h2>
              <div className="heading-underline"></div>

              <p className="about-intro">
                ALBERTO WATCH is your guide into the world of timepieces. From
                luxury craftsmanship to modern smartwatch innovations, we
                connect you with the details, the technology, and the stores
                where you can experience them.
              </p>

              <p className="about-description">
                Founded on the principles of excellence and innovation, we
                curate only the finest watches from renowned manufacturers
                worldwide. Our expertise spans decades, ensuring you find the
                perfect timepiece for every moment of your life.
              </p>

              <p className="about-mission">
                Our mission is to preserve the art of traditional watchmaking
                while embracing the future of timekeeping technology. We believe
                that a watch is more than just a tool to tell time – it's a
                reflection of your personality, style, and values.
              </p>

              <div className="about-cta">
                <button className="learn-more-btn">
                  <span>Our Story</span>
                  <div className="btn-arrow">→</div>
                </button>
              </div>
            </div>

            <div className="about-image">
              <div className="image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=600&h=500&fit=crop&auto=format"
                  alt="Alberto Watch Heritage"
                  loading="lazy"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3>Heritage & Innovation</h3>
                    <p>
                      Combining traditional craftsmanship with modern technology
                    </p>
                  </div>
                </div>
              </div>

              <div className="floating-badge">
                <div className="badge-content">
                  <div className="badge-number">1998</div>
                  <div className="badge-text">Est.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="about-stats">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item hover-lift">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="about-values">
          <div className="values-header">
            <h3 className="values-heading">Our Core Values</h3>
            <p className="values-subtitle">
              The principles that guide everything we do
            </p>
          </div>

          <div className="values-grid">
            {values.map((value) => (
              <div key={value.id} className="value-card hover-lift">
                <div className="value-icon">{value.icon}</div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="about-team">
          <div className="team-header">
            <h3 className="team-heading">Meet Our Team</h3>
            <p className="team-subtitle">
              The passionate experts behind ALBERTO WATCH
            </p>
          </div>

          <div className="team-grid">
            {team.map((member) => (
              <div key={member.id} className="team-card hover-lift">
                <div className="team-image-wrapper">
                  <img src={member.image} alt={member.name} loading="lazy" />
                  <div className="team-overlay">
                    <button className="team-contact-btn">
                      Contact {member.name.split(" ")[0]}
                    </button>
                  </div>
                </div>

                <div className="team-info">
                  <h4 className="team-name">{member.name}</h4>
                  <div className="team-position">{member.position}</div>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment Section */}
        <div className="about-commitment">
          <div className="commitment-content">
            <div className="commitment-text">
              <h3>Our Commitment to Excellence</h3>
              <p>
                Every watch in our collection is carefully selected and
                inspected by our team of experts. We stand behind the quality
                and authenticity of every timepiece, offering comprehensive
                warranties and exceptional after-sales service.
              </p>
              <div className="commitment-features">
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Authentic Timepieces Only</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Expert Quality Inspection</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Comprehensive Warranties</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Professional After-Sales Service</span>
                </div>
              </div>
            </div>

            <div className="commitment-image">
              <img
                src="https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=500&h=400&fit=crop&auto=format"
                alt="Quality Inspection"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
