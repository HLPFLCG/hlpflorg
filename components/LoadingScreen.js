import Image from 'next/image';
// components/LoadingScreen.js
export default function LoadingScreen() {
  return (
    <div id="loading-screen" className="loading-screen">
      <Image src="/images/header/websiteheader.webp" alt="Loading HLPFL logo" className="loading-logo" />
    </div>
  );
}