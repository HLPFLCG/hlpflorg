// pages/_app.js
import '@/styles/style.css'; // Global CSS import (make sure the path is correct)
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
  const handleRouteChange = () => {
    initScrollAnimations();
  };

  router.events.on('routeChangeComplete', handleRouteChange);
  handleRouteChange(); // initial load

  return () => {
    router.events.off('routeChangeComplete', handleRouteChange);
  };
}, [router]);

  return <Component {...pageProps} />;
}