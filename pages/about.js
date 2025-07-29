// pages/about.js
import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About – HLPFL Consulting</title>
      </Head>
      <Header />
      <main>
        <section className="about" data-scroll-section>
          <div className="container about__content">
            <div className="about__text">
              <header className="section-header" style={{ textAlign: 'left' }}>
                <span className="section-number">02</span>
                <h2 className="animate-text">About HLPFL</h2>
              </header>
              <p>HLPFL was founded on the principle of just that - to be helpful...</p>
              <ul>
                <li>Founded by a 24 year old entrepreneur...</li>
                <li>We handle everything from legal to web development...</li>
                <li>We&apos;re not your traditional consulting agency...</li>
              </ul>
            </div>
            <figure className="about__image" data-speed="-0.1">
              <image src="/images/founder/Artboard 1@0.75x.webp" alt="Founder at work" loading="lazy" />
            </figure>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
