// pages/red-flag-guide.js
import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';

export default function RedFlagGuidePage() {
  return (
    <>
      <Head>
        <title>Red Flag Guide – HLPFL Consulting</title>
      </Head>
      <Header />
      <main>
        <section id="red-flag" className="red-flag" data-scroll-section>
          <div className="container">
            <header className="section-header">
              <span className="section-number">04</span>
              <h2 className="animate-text">Free Red Flag Guide</h2>
            </header>
            <div className="red-flag-content">
              <div className="red-flag-info">
                <h3>Protect Your Business Before It&apos;s Too Late</h3>
                <p>Our comprehensive guide identifies the 15 most common pitfalls...</p>
                <ul className="red-flag-list">
                  <li>Identify critical vulnerabilities in your business structure</li>
                  <li>Protect yourself from partnership disasters</li>
                  <li>Secure your intellectual property and digital assets</li>
                  <li>Create a foundation for sustainable growth</li>
                </ul>
                <a href="/red-flag-guide.pdf" className="btn btn--primary">GET FREE GUIDE</a>
              </div>
              <div className="red-flag-image">
                <div className="image-placeholder">Red Flag Guide Cover</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}