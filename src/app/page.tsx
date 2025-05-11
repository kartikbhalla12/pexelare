export const revalidate = 60;

import Script from "next/script";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import LinkedIn from "@/components/LinkedIn";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { client } from "@/lib/sanity";
import {
  heroQuery,
  visionQuery,
  linkedinQuery,
  testimonialsQuery,
  servicesQuery,
  projectsQuery,
  projectListQuery,
} from "@/lib/queries";

export default async function Home() {
  const [
    heroData,
    visionData,
    linkedinData,
    testimonialsData,
    servicesData,
    projectsData,
    projectListData,
  ] = await Promise.all([
    client.fetch(heroQuery),
    client.fetch(visionQuery),
    client.fetch(linkedinQuery),
    client.fetch(testimonialsQuery),
    client.fetch(servicesQuery),
    client.fetch(projectsQuery),
    client.fetch(projectListQuery),
  ]);
  console.log(projectListData);

  return (
    <main>
      <Header />
      <Hero data={heroData} />
      <Vision data={visionData} />
      <Services data={servicesData} />
      <Projects data={projectsData} projectListData={projectListData} />
      <LinkedIn data={linkedinData} />
      <Testimonials data={testimonialsData} />
      <Contact />
      <Footer />

      <Script src="https://static.elfsight.com/platform/platform.js" async />
    </main>
  );
}
