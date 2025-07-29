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
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/vip">VIP</Link></li>
            <li><Link href="/book" className="btn btn--primary">Let&apos;s talk</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}