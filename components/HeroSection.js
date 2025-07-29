import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="hero" className="hero" data-scroll-section>
      <canvas id="heroCanvas" className="hero__canvas" aria-hidden="true"></canvas>
      <div className="hero__content">
        <h1 className="hero__title animate-text">Chaos → Clarity</h1>
        <p className="hero__subtitle animate-text">Dream. Design. Disrupt. Repeat.</p>
        <p className="hero__subtitle animate-text">First Time Founder Kits Delivered &lt;60 Days.</p>
        <div className="hero__cta">
          <Link href="/book"><span className="btn btn--primary">Book a Discovery Call</span></Link>
          <Link href="/red-flag-guide"><span className="btn btn--secondary" data-scroll-to>Get Your Red Flag Guide</span></Link>
        </div>
      </div>
    </section>
  );
}