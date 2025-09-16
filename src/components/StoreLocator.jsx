import React, { useState } from "react";
import "./StoreLocator.css";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaStar,
  FaSearch,
  FaMapMarkedAlt,
} from "react-icons/fa";

function StoreLocator() {
  const [selectedCity, setSelectedCity] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const stores = [
    {
      id: 1,
      name: "ALBERTO WATCH Fifth Avenue",
      city: "New York",
      address: "123 Fifth Avenue, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "fifthave@albertowatch.com",
      hours: {
        weekdays: "10:00 AM - 8:00 PM",
        saturday: "10:00 AM - 9:00 PM",
        sunday: "12:00 PM - 6:00 PM",
      },
      services: [
        "Watch Repair",
        "Custom Engraving",
        "Battery Replacement",
        "Appraisals",
      ],
      featured: true,
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&auto=format",
    },
    {
      id: 2,
      name: "ALBERTO WATCH Beverly Hills",
      city: "Los Angeles",
      address: "456 Rodeo Drive, Beverly Hills 90210",
      phone: "+1 (555) 234-5678",
      email: "beverlyhills@albertowatch.com",
      hours: {
        weekdays: "10:00 AM - 8:00 PM",
        saturday: "10:00 AM - 9:00 PM",
        sunday: "12:00 PM - 6:00 PM",
      },
      services: [
        "Watch Repair",
        "Personal Shopping",
        "VIP Appointments",
        "Trade-ins",
      ],
      featured: true,
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&auto=format",
    },
    {
      id: 3,
      name: "ALBERTO WATCH Michigan Avenue",
      city: "Chicago",
      address: "789 N Michigan Ave, Chicago 60611",
      phone: "+1 (555) 345-6789",
      email: "chicago@albertowatch.com",
      hours: {
        weekdays: "10:00 AM - 7:00 PM",
        saturday: "10:00 AM - 8:00 PM",
        sunday: "12:00 PM - 6:00 PM",
      },
      services: [
        "Watch Repair",
        "Battery Replacement",
        "Strap Adjustment",
        "Cleaning",
      ],
      featured: false,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format",
    },
    {
      id: 4,
      name: "ALBERTO WATCH Ocean Drive",
      city: "Miami",
      address: "321 Ocean Drive, Miami Beach 33139",
      phone: "+1 (555) 456-7890",
      email: "miami@albertowatch.com",
      hours: {
        weekdays: "10:00 AM - 8:00 PM",
        saturday: "10:00 AM - 9:00 PM",
        sunday: "11:00 AM - 7:00 PM",
      },
      services: [
        "Watch Repair",
        "Water Testing",
        "Summer Collections",
        "Beach-Safe Watches",
      ],
      featured: false,
      image:
        "https://images.unsplash.com/photo-1515599937564-e79b3b3bd260?w=400&h=300&fit=crop&auto=format",
    },
    {
      id: 5,
      name: "ALBERTO WATCH Union Square",
      city: "San Francisco",
      address: "654 Union Square, SF 94108",
      phone: "+1 (555) 567-8901",
      email: "sf@albertowatch.com",
      hours: {
        weekdays: "10:00 AM - 7:00 PM",
        saturday: "10:00 AM - 8:00 PM",
        sunday: "12:00 PM - 6:00 PM",
      },
      services: [
        "Watch Repair",
        "Tech Support",
        "Smart Watch Setup",
        "Vintage Restoration",
      ],
      featured: false,
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&auto=format",
    },
    {
      id: 6,
      name: "ALBERTO WATCH The Strip",
      city: "Las Vegas",
      address: "987 Las Vegas Blvd S, LV 89101",
      phone: "+1 (555) 678-9012",
      email: "vegas@albertowatch.com",
      hours: {
        weekdays: "10:00 AM - 10:00 PM",
        saturday: "10:00 AM - 11:00 PM",
        sunday: "10:00 AM - 9:00 PM",
      },
      services: [
        "Watch Repair",
        "24/7 Emergency",
        "Luxury Concierge",
        "Express Service",
      ],
      featured: true,
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop&auto=format",
    },
  ];

  const cities = ["all", ...new Set(stores.map((store) => store.city))];

  const filteredStores = stores.filter((store) => {
    const matchesCity = selectedCity === "all" || store.city === selectedCity;
    const matchesSearch =
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.address.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <section id="stores" className="store-locator">
      <div className="container">
        <div className="store-header">
          <h2 className="store-heading">Find Stores Near You</h2>
          <p className="store-subtitle">
            Locate authorized retailers to experience our watches in person
          </p>
        </div>

        {/* Search and Filter */}
        <div className="store-controls">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search by city, store name, or address..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="store-search"
            />
            <div className="search-icon">
              <FaSearch />
            </div>
          </div>

          <div className="filter-wrapper">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="city-filter"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city === "all" ? "All Cities" : city}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Store Results */}
        <div className="store-results">
          <div className="results-header">
            <h3>
              {filteredStores.length} Store
              {filteredStores.length !== 1 ? "s" : ""} Found
              {selectedCity !== "all" && ` in ${selectedCity}`}
            </h3>
          </div>

          <div className="store-grid">
            {filteredStores.map((store) => (
              <div
                key={store.id}
                className={`store-card hover-lift ${
                  store.featured ? "featured" : ""
                }`}
              >
                {store.featured && (
                  <div className="featured-badge">
                    <FaStar /> Featured Store
                  </div>
                )}

                <div className="store-image-wrapper">
                  <img src={store.image} alt={store.name} loading="lazy" />
                  <div className="store-overlay">
                    <button className="directions-btn">
                      <FaMapMarkerAlt /> Get Directions
                    </button>
                  </div>
                </div>

                <div className="store-info">
                  <div className="store-main">
                    <h3 className="store-name">{store.name}</h3>
                    <div className="store-city">{store.city}</div>
                  </div>

                  <div className="store-details">
                    <div className="detail-item">
                      <span className="detail-icon">
                        <FaMapMarkerAlt />
                      </span>
                      <span className="detail-text">{store.address}</span>
                    </div>

                    <div className="detail-item">
                      <span className="detail-icon">
                        <FaPhone />
                      </span>
                      <span className="detail-text">{store.phone}</span>
                    </div>

                    <div className="detail-item">
                      <span className="detail-icon">
                        <FaEnvelope />
                      </span>
                      <span className="detail-text">{store.email}</span>
                    </div>
                  </div>

                  <div className="store-hours">
                    <h4>Store Hours</h4>
                    <div className="hours-grid">
                      <div className="hours-item">
                        <span className="hours-label">Mon - Fri:</span>
                        <span className="hours-time">
                          {store.hours.weekdays}
                        </span>
                      </div>
                      <div className="hours-item">
                        <span className="hours-label">Saturday:</span>
                        <span className="hours-time">
                          {store.hours.saturday}
                        </span>
                      </div>
                      <div className="hours-item">
                        <span className="hours-label">Sunday:</span>
                        <span className="hours-time">{store.hours.sunday}</span>
                      </div>
                    </div>
                  </div>

                  <div className="store-services">
                    <h4>Services</h4>
                    <div className="services-list">
                      {store.services.map((service, index) => (
                        <span key={index} className="service-tag">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="store-actions">
                    <button className="contact-store-btn">
                      <FaPhone /> Call Store
                    </button>
                    <button className="visit-store-btn">
                      <FaMapMarkedAlt /> Visit Store
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Store Locator CTA */}
        <div className="store-cta">
          <div className="cta-content">
            <h3>Can't Find a Store Near You?</h3>
            <p>
              We're constantly expanding our retail network. Get notified when
              we open a new location in your area.
            </p>
            <div className="cta-actions">
              <button className="notify-btn">Get Notified</button>
              <button className="online-btn">Shop Online</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoreLocator;
