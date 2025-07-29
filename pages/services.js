// pages/services.js
import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';
import ServicesSection from '../components/ServicesSection';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services – HLPFL Consulting</title>
      </Head>
      <Header />
      <main>
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}