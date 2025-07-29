import { useEffect } from 'react';

export default function RedirectToContact() {
  useEffect(() => {
    window.location.href = '/book';
  }, []);
  return null;
}