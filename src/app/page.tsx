export const revalidate = 60;

import Script from "next/script";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import LinkedIn from "@/components/LinkedIn";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { client } from "@/lib/sanity";
import { heroQuery, visionQuery, linkedinQuery, testimonialsQuery, servicesQuery } from "@/lib/queries";

export default async function Home() {
  const [heroData, visionData, linkedinData, testimonialsData, servicesData] = await Promise.all([
    client.fetch(heroQuery),
    client.fetch(visionQuery),
    client.fetch(linkedinQuery),
    client.fetch(testimonialsQuery),
    client.fetch(servicesQuery),
  ]);

  console.log(testimonialsData);

  return (
    <main>
      <Header />
      <Hero data={heroData} />
      <Vision data={visionData} />
      <LinkedIn data={linkedinData} />
      <Testimonials data={testimonialsData} />
      <Services data={servicesData} />
      <Contact />
      <Footer />

      <Script
        src="https://static.elfsight.com/platform/platform.js"
        async
      />
    </main>
  );
}
