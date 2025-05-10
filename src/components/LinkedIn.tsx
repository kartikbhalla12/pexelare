"use client";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlForImage } from "@/lib/sanity";
import { useEffect } from "react";
import Image from "next/image";

interface CTAButton {
  text: string;
  link: string;
  icon: SanityImageSource;
}

interface LinkedInData {
  title: string;
  titleHighlight: string;
  description: string;
  ctaButton: CTAButton;
}

export default function LinkedIn({ data }: { data: LinkedInData }) {
  useEffect(() => {
    const removeLink = setTimeout(() => {
      const link = document.querySelector('a[href*="elfsight"]');
      link?.remove();
    }, 500);

    return () => clearTimeout(removeLink);
  }, []);

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {data.title}
            <span className="text-blue-600"> {data.titleHighlight}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        <div
          className="elfsight-app-dcb62072-98c2-476d-acd8-ba01b5ea5965"
          data-elfsight-app-lazy
        ></div>

        <div className="text-center mt-16">
          <a
            href={data.ctaButton.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-colors font-medium shadow-lg hover:shadow-xl gap-2"
          >
            {data.ctaButton.icon && (
              <Image
                src={urlForImage(data.ctaButton.icon).url()}
                alt={data.ctaButton.text}
                width={24}
                height={24}
                className="w-5 h-5"
              />
            )}
            {data.ctaButton.text}
          </a>
        </div>
      </div>
    </section>
  );
}
