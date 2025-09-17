import React, { useState } from "react";
import "./css/WatchDetails.css";
import {
  FaWrench,
  FaCogs,
  FaWater,
  FaRuler,
  FaGem,
  FaBatteryFull,
  FaBolt,
  FaMobileAlt,
  FaSatellite,
  FaStar,
} from "react-icons/fa";

function WatchDetails() {
  const [selectedWatch, setSelectedWatch] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const watches = [
    {
      id: 1,
      name: "Classic Mechanical",
      image:
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=400&fit=crop&auto=format",
      price: "$2,499",
      rating: 4.8,
      specs: [
        { label: "Material", value: "Stainless Steel", icon: <FaWrench /> },
        { label: "Movement", value: "Automatic", icon: <FaCogs /> },
        { label: "Water Resistance", value: "50m", icon: <FaWater /> },
        { label: "Case Diameter", value: "42mm", icon: <FaRuler /> },
        { label: "Crystal", value: "Sapphire", icon: <FaGem /> },
        { label: "Power Reserve", value: "48 hours", icon: <FaBatteryFull /> },
      ],

      features: [
        "Swiss Made",
        "Anti-Magnetic",
        "Luminous Hands",
        "Exhibition Caseback",
      ],
      category: "Luxury",
    },
    {
      id: 2,
      name: "Modern Quartz",
      image:
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500&h=400&fit=crop&auto=format",
      price: "$899",
      rating: 4.6,
      specs: [
        { label: "Material", value: "Stainless Steel", icon: <FaWrench /> },
        { label: "Movement", value: "Automatic", icon: <FaCogs /> },
        { label: "Water Resistance", value: "50m", icon: <FaWater /> },
        { label: "Case Diameter", value: "42mm", icon: <FaRuler /> },
        { label: "Crystal", value: "Sapphire", icon: <FaGem /> },
        { label: "Power Reserve", value: "48 hours", icon: <FaBatteryFull /> },
      ],

      features: [
        "Lightweight",
        "Scratch Resistant",
        "Date Display",
        "Quick Release Strap",
      ],
      category: "Sport",
    },
    {
      id: 3,
      name: "Smart Watch Pro",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=400&fit=crop&auto=format",
      price: "$599",
      rating: 4.7,
      specs: [
        { label: "Material", value: "Stainless Steel", icon: <FaWrench /> },
        { label: "Movement", value: "Automatic", icon: <FaCogs /> },
        { label: "Water Resistance", value: "50m", icon: <FaWater /> },
        { label: "Case Diameter", value: "42mm", icon: <FaRuler /> },
        { label: "Crystal", value: "Sapphire", icon: <FaGem /> },
        { label: "Power Reserve", value: "48 hours", icon: <FaBatteryFull /> },
      ],

      features: [
        "Health Monitoring",
        "GPS Tracking",
        "Voice Assistant",
        "Wireless Charging",
      ],
      category: "Smart",
    },
    {
      id: 4,
      name: "Vintage Heritage",
      image:
        "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500&h=400&fit=crop&auto=format",
      price: "$1,799",
      rating: 4.9,
      specs: [
        { label: "Material", value: "Stainless Steel", icon: <FaWrench /> },
        { label: "Movement", value: "Automatic", icon: <FaCogs /> },
        { label: "Water Resistance", value: "50m", icon: <FaWater /> },
        { label: "Case Diameter", value: "42mm", icon: <FaRuler /> },
        { label: "Crystal", value: "Sapphire", icon: <FaGem /> },
        { label: "Power Reserve", value: "48 hours", icon: <FaBatteryFull /> },
      ],

      features: [
        "Hand-Wound",
        "Vintage Dial",
        "Leather Strap",
        "Limited Edition",
      ],
      category: "Vintage",
    },
  ];

  const openWatchModal = (watch) => {
    setSelectedWatch(watch);
  };

  const closeWatchModal = () => {
    setSelectedWatch(null);
  };

  return (
    <section id="details" className="watch-details">
      <div className="container">
        <div className="details-header">
          <h2 className="details-heading">Watch Details</h2>
          <p className="details-subtitle">
            Explore the specifications and craftsmanship of our featured
            timepieces
          </p>
        </div>

        <div className="details-grid">
          {watches.map((watch) => (
            <div key={watch.id} className="watch-card hover-lift">
              <div className="watch-image-wrapper">
                <img src={watch.image} alt={watch.name} loading="lazy" />
                <div className="watch-category">{watch.category}</div>
                <div className="watch-overlay">
                  <button
                    className="quick-view-btn"
                    onClick={() => openWatchModal(watch)}
                  >
                    Quick View
                  </button>
                </div>
              </div>

              <div className="watch-info">
                <div className="watch-header">
                  <h3 className="watch-name">{watch.name}</h3>
                  <div className="watch-price">{watch.price}</div>
                </div>

                <div className="watch-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < Math.floor(watch.rating) ? "star filled" : "star"
                        }
                      />
                    ))}
                  </div>

                  <span className="rating-text">({watch.rating})</span>
                </div>

                <ul className="watch-specs">
                  {watch.specs.slice(0, 4).map((spec, index) => (
                    <li key={index}>
                      <span className="spec-icon">{spec.icon}</span>
                      <span className="spec-label">{spec.label}:</span>
                      <span className="spec-value">{spec.value}</span>
                    </li>
                  ))}
                </ul>

                <div className="watch-actions">
                  <button
                    className="store-btn"
                    onClick={() => scrollToSection("stores")}
                  >
                    <span>Find Stores</span>
                    <div className="btn-glow"></div>
                  </button>
                  <button
                    className="details-btn"
                    onClick={() => openWatchModal(watch)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedWatch && (
          <div className="watch-modal-overlay" onClick={closeWatchModal}>
            <div className="watch-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeWatchModal}>
                ×
              </button>

              <div className="modal-content">
                <div className="modal-image">
                  <img src={selectedWatch.image} alt={selectedWatch.name} />
                </div>

                <div className="modal-info">
                  <div className="modal-header">
                    <h3>{selectedWatch.name}</h3>
                    <div className="modal-price">{selectedWatch.price}</div>
                  </div>

                  <div className="modal-rating">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < Math.floor(watch.rating)
                              ? "star filled"
                              : "star"
                          }
                        />
                      ))}
                    </div>

                    <span className="rating-text">
                      ({selectedWatch.rating})
                    </span>
                  </div>

                  <div className="modal-specs">
                    <h4>Specifications</h4>
                    <ul>
                      {selectedWatch.specs.map((spec, index) => (
                        <li key={index}>
                          <span className="spec-icon">{spec.icon}</span>
                          <span className="spec-label">{spec.label}:</span>
                          <span className="spec-value">{spec.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-features">
                    <h4>Key Features</h4>
                    <ul>
                      {selectedWatch.feature.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-actions">
                    <button
                      className="modal-store-btn"
                      onClick={() => {
                        closeWatchModal();
                        scrollToSection("stores");
                      }}
                    >
                      Find Stores
                    </button>
                    <button
                      className="modal-contact-btn"
                      onClick={() => {
                        closeWatchModal();
                        scrollToSection("contact");
                      }}
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default WatchDetails;
