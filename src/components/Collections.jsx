import React from "react";
import "./css/Collections.css";

function Collections() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const collections = [
    {
      id: 1,
      name: "Luxury Watches",
      image: "/public/Images/a6c85cd3-7be9-4d6f-8a16-ce00905ad920.jpg",
      description: "Exquisite craftsmanship meets timeless elegance",
      features: ["Swiss Movement", "Premium Materials", "Limited Edition"],
    },
    {
      id: 2,
      name: "Smart Watches",
      image: "/public/Images/Smart Watches - itel.jpg",
      description: "Technology seamlessly integrated into style",
      features: ["Health Tracking", "GPS Navigation", "Smart Notifications"],
    },
    {
      id: 3,
      name: "Sports Watches",
      image:
        "https://images.unsplash.com/photo-1594576662435-76b1d0f48c1e?w=600&h=400&fit=crop&auto=format",
      description: "Built for performance and adventure",
      features: ["Water Resistant", "Shock Proof", "Multi-Sport Modes"],
    },
    {
      id: 4,
      name: "Vintage Watches",
      image: "/public/Images/in stock.jpg",
      description: "Classic designs with timeless appeal",
      features: ["Heritage Design", "Mechanical Movement", "Collector's Item"],
    },
  ];

  return (
    <section id="collections" className="collections">
      <div className="container">
        <div className="collections-header">
          <h2 className="coll-name">Our Watch Collections</h2>
          <p className="coll-subtitle">
            Discover our carefully curated selection of timepieces for every
            style and occasion
          </p>
        </div>

        <div className="collection-sections">
          {collections.map((collection) => (
            <div key={collection.id} className="collection-item hover-lift">
              <div className="collection-image-wrapper">
                <img
                  src={collection.image}
                  alt={collection.name}
                  loading="lazy"
                />
                <div className="image-overlay"></div>
              </div>

              <div className="overlay">
                <div className="overlay-content">
                  <h3>{collection.name}</h3>
                  <p className="collection-description">
                    {collection.description}
                  </p>
                  <ul className="collection-features">
                    {collection.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <button
                    className="see-more-btn"
                    onClick={() => scrollToSection("details")}
                  >
                    <span>See More</span>
                    <div className="btn-arrow">→</div>
                  </button>
                </div>
              </div>

              <div className="collection-info">
                <h3 className="collection-title">{collection.name}</h3>
                <p className="collection-desc">{collection.description}</p>
                <div className="collection-stats">
                  <span className="stat-item">
                    <strong>{collection.features.length}</strong> Features
                  </span>
                  <span className="stat-item">
                    <strong>New</strong> Arrivals
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="collections-cta">
          <p>Can't find what you're looking for?</p>
          <button
            className="browse-all-btn"
            onClick={() => scrollToSection("contact")}
          >
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
}

export default Collections;
