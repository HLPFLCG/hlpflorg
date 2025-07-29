import { useEffect } from 'react';

export default function RedirectToBook() {
  useEffect(() => {
    window.location.href = 'https://calendly.com/founder-hlpfl/30min';
  }, []);
  return null;
}