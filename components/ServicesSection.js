// ServicesSection.js
export default function ServicesSection() {
  return (
    <section id="services" className="services" data-scroll-section>
      <div className="container">
        <header className="section-header">
          <span className="section-number">01</span>
          <h2 className="animate-text">What, Why, How</h2>
        </header>
        <div className="services__grid">
          <article className="service-card animate-text" data-speed="0.08">
            <h3>What We Do</h3>
            <p>At HLPFL, we guide first-time entrepreneurs in creating and developing their businesses with proper foundations through our comprehensive services: business structure setup, legal protection packages, privacy implementation, and brand development—ensuring you avoid the traditional pitfalls and failures that often come with becoming a business owner.</p>
          </article>
          <article className="service-card animate-text" data-speed="0.04">
            <h3>Our Services</h3>
            <p>We provide four essential service categories to protect and develop your business:</p>
            <ul className="service-list">
              <li><strong>Business Foundation Services</strong> - Entity formation, banking setup, and operational systems</li>
              <li><strong>Legal Protection Services</strong> - Contracts, agreements, and liability shields</li>
              <li><strong>Brand & Digital Services</strong> - Logo design, website development, and digital presence</li>
              <li><strong>Privacy Protection Services</strong> - Personal information security and business privacy strategies</li>
            </ul>
          </article>
          <article className="service-card animate-text" data-speed="0.02">
            <h3>How We Do It</h3>
            <p>No lengthy contracts, sharing percentages of revenue, or free gimmicks here. We only offer various packages as well as an a la carte menu so you get exactly what you need to fit your goals, nothing more, and nothing less. Our consultants guarantee to provide the best possible combination of services for you so you can do what you do best - change the world.</p>
          </article>
        </div>
      </div>
    </section>
  );
}