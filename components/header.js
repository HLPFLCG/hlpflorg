import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
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
            <li>
              <a href="https://hlpfl.store" target="_blank" rel="noopener noreferrer">Shop</a>
            </li>
            <li>
              <a href="https://hlpfl.vip" target="_blank" rel="noopener noreferrer">VIP</a>
            </li>
            <li>
              <a href="https://calendly.com/founder-hlpfl/30min" className="btn btn--primary" target="_blank" rel="noopener noreferrer">
               Let&apos;s talk
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}