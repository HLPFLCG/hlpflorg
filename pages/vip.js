import { useEffect } from 'react';

export default function RedirectToVip() {
  useEffect(() => {
    window.location.href = 'https://hlpfl.vip';
  }, []);
  return null;
}