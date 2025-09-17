import React from "react";
import "./css/Technology.css";

function Technology() {
  const technologies = [
    {
      id: 1,
      icon: "⚙️",
      title: "Mechanical Watches",
      description:
        "Powered by intricate gears and springs, mechanical watches run without batteries. They are either manual-wind or automatic (self-winding) and valued for craftsmanship and tradition.",
      features: [
        "Manual & Automatic",
        "No Battery Required",
        "Traditional Craftsmanship",
        "Heritage Appeal",
      ],
      color: "#ef4444",
    },
    {
      id: 2,
      icon: "🔋",
      title: "Quartz Watches",
      description:
        "Quartz watches use a battery and a quartz crystal oscillator to keep time with extreme accuracy. They are affordable, reliable, and low-maintenance compared to mechanical models.",
      features: [
        "High Accuracy",
        "Low Maintenance",
        "Battery Powered",
        "Cost Effective",
      ],
      color: "#3b82f6",
    },
    {
      id: 3,
      icon: "📡",
      title: "Smart Technology",
      description:
        "Smartwatches combine timekeeping with advanced features like fitness tracking, notifications, GPS, and even health monitoring — integrating technology into everyday wear.",
      features: [
        "Health Monitoring",
        "GPS Navigation",
        "Smart Notifications",
        "App Integration",
      ],
      color: "#10b981",
    },
    {
      id: 4,
      icon: "☀️",
      title: "Solar / Eco Watches",
      description:
        "Solar-powered watches harness light energy (sunlight or artificial) and convert it into electricity. They are eco-friendly, long-lasting, and reduce the need for frequent battery replacements.",
      features: [
        "Eco-Friendly",
        "Light Powered",
        "Long Lasting",
        "Sustainable",
      ],
      color: "#f59e0b",
    },
  ];

  return (
    <section id="technology" className="technology-section">
      <div className="container">
        <div className="tech-header">
          <h2 className="tech-name">The Technology Behind Time</h2>
          <p className="tech-subtitle">
            Understanding the intricate mechanisms that power our timepieces
          </p>
        </div>

        <div className="tech-content">
          {technologies.map((tech, index) => (
            <div
              key={tech.id}
              className="tech-card hover-lift"
              style={{ "--card-color": tech.color }}
            >
              <div className="tech-icon">
                <span>{tech.icon}</span>
                <div className="icon-bg"></div>
              </div>

              <div className="tech-info">
                <h3>{tech.title}</h3>
                <p className="tech-description">{tech.description}</p>

                <ul className="tech-features">
                  {tech.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <div className="tech-learn-more">
                  <button className="learn-more-btn">
                    Learn More
                    <span className="arrow">→</span>
                  </button>
                </div>
              </div>

              <div className="card-number">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-bottom">
          <div className="tech-stats">
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Years of Combined Innovation</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Core Technologies</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Precision Components</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technology;
