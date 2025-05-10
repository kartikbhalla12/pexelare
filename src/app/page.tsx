import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Vision from '@/components/Vision';
import LinkedIn from '@/components/LinkedIn';
import Testimonials from '@/components/Testimonials';
import Products from '@/components/Products';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import { client } from '@/lib/sanity'
import { heroQuery } from '@/lib/queries'

export default async function Home() {
  const heroData = await client.fetch(heroQuery)
  
  return (
    <main>
      <Header />
      <Hero data={heroData} />
      <Vision />
      <LinkedIn />
      <Testimonials />
      <Products />
      <Contact />
      <Footer />
    </main>
  );
}
