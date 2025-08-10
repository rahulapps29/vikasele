import React from "react";
import Header from "../components/Header";
import "./Home.css";
function Home() {
  return (
    <div className="page home-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Vikas Electrical Services</h1>
        <p>
          Your trusted partner for all electrical solutions – from switches,
          wires, and tools to modern appliances. Quality products, expert
          service, and competitive prices.
        </p>
        <div className="cta-buttons">
          <button className="btn-primary">Shop Now</button>
          <button className="btn-secondary">Contact Us</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>✔ Electrical wiring installation and repair</li>
          <li>✔ Switchboard setup & maintenance</li>
          <li>✔ Home & industrial electrical solutions</li>
          <li>✔ Energy-efficient lighting installation</li>
        </ul>
      </section>

      {/* Featured Products Section */}
      <section className="products">
        <h2>Popular Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="/images/switch.jpg" alt="Switch" />
            <h3>Premium Switches</h3>
          </div>
          <div className="product-card">
            <img src="/images/wire.jpg" alt="Wire" />
            <h3>High-Quality Wires</h3>
          </div>
          <div className="product-card">
            <img src="/images/tools.jpg" alt="Tools" />
            <h3>Durable Tools</h3>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Need Help?</h2>
        <p>
          Our team is here to assist you with your electrical needs. Call us
          today or visit our store.
        </p>
        <button className="btn-primary">Get in Touch</button>
      </section>
    </div>
  );
}

export default Home;
