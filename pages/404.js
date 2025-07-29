// pages/404.js
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="not-found" style={{ textAlign: 'center', padding: '5rem 2rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404 — Page Not Found</h1>
      <p style={{ fontSize: '1.25rem' }}>Looks like you&apos;re lost. Try the menu above or return <Link href="/">home</Link>.</p>
    </div>
  );
}