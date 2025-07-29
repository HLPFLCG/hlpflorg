// pages/_app.js
import '@/styles/style.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Optional: Add scroll to top or route-specific effects here
    const handleRouteChange = () => {
      // You could add additional route-based logic here
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return <Component {...pageProps} />;
}