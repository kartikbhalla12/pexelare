import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import LinkedIn from "@/components/LinkedIn";
import Testimonials from "@/components/Testimonials";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { client } from "@/lib/sanity";
import { heroQuery, visionQuery, linkedinQuery } from "@/lib/queries";

export default async function Home() {
  const [heroData, visionData, linkedinData] = await Promise.all([
    client.fetch(heroQuery),
    client.fetch(visionQuery),
    client.fetch(linkedinQuery),
  ]);

  return (
    <main>
      <Header />
      <Hero data={heroData} />
      <Vision data={visionData} />
      <LinkedIn data={linkedinData} />
      <Testimonials />
      <Products />
      <Contact />
      <Footer />
    </main>
  );
}
