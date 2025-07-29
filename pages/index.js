import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimations } from '@/lib/animations';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';

export default function Home() {
  useScrollAnimations();

  return (
    <>
      <Head>
        <title>HLPFL Consulting – LLC setup, contracts & branding for new entrepreneurs</title>
        <meta name="description" content="We help first-time founders create legally solid, privacy-first businesses with standout brands. Entity filing, contracts, web, more." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HLPFL Consulting" />
        <meta property="og:description" content="Chaos → Clarity for your startup." />
        <meta property="og:image" content="/og-cover.jpg" />
        <link rel="icon" href="/images/favicon/noboxfaviconArtboard 1.webp" type="image/webp" />
        <link rel="canonical" href="https://hlpfl.org/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.css" crossOrigin="anonymous" />
      </Head>

      <div id="loading-screen" className="loading-screen">
        <Image src="/images/header/websiteheader.webp" alt="HLPFL Consulting" width={400} height={100} />
      </div>

      <header className="header" data-scroll data-scroll-sticky>
        <div className="container">
          <Link href="/" className="logo">
            <Image src="/images/footer/footerlogowebsitev2.webp" alt="HLPFL Consulting logo" width={120} height={50} />
          </Link>
          <nav aria-label="Main navigation">
            <button className="nav__toggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="main-menu">
              <span></span><span></span><span></span>
            </button>
            <ul className="nav__list" id="main-menu">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/red-flag-guide">Red Flag Guide</Link></li>
              <li><Link href="https://hlpfl.store" target="_blank" rel="noopener noreferrer">Shop</Link></li>
              <li><Link href="/vip">VIP</Link></li>
              <li><Link href="/book"><span className="btn btn--primary">Let&apos;s Talk</span></Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main" data-scroll-container>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__brand">
              <Image src="/images/header/websiteheader.webp" alt="HLPFL Consulting logo" width={120} height={50} />
              <p>© <span id="year"></span> HLPFL Co. All rights reserved.</p>
            </div>
            <div className="footer__social">
              <h3>Connect with Us</h3>
              <ul>
                <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
              </ul>
            </div>
            <div className="footer__links">
              <h3>Navigation</h3>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/red-flag-guide">Red Flag Guide</Link></li>
                <li><Link href="/shop">Shop</Link></li>
                <li><Link href="/book">Book</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="custom-cursor" aria-hidden="false"></div>
      <div className="cursor-dot" aria-hidden="false"></div>

      <Script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/split-type@0.3.4/dist/umd/index.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/three@0.163.0/build/three.min.js" strategy="afterInteractive" />
    </>
  );
}