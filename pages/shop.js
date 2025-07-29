import { useEffect } from 'react';

export default function RedirectToShop() {
  useEffect(() => {
    window.location.href = 'https://hlpfl.store';
  }, []);
  return null;
}