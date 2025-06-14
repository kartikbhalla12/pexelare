"use client";

import Image from "next/image";
import Link from "next/link";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { urlForImage } from "@/lib/sanity";

interface CtaButton {
  text: string;
  link: string;
  icon: SanityImageSource;
}

interface Project {
  title: string;
  image: SanityImageSource;
  techStack: string[];
  shortDescription: string;
  projectLink: string;
  slug: {
    current: string;
    _type: string;
  };
}

interface ProjectsProps {
  data: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaButton: CtaButton;
  };
  projectListData: Project[];
}

export default function Projects({ data, projectListData }: ProjectsProps) {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {data.title}
            <span className="text-blue-600"> {data.titleHighlight}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectListData.map((project, index) => (
            <Link
              href={`/projects/${project.slug.current}`}
              key={index}
              className="block group h-full"
            >
              <div className="bg-white rounded-sm shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                <div className="relative aspect-video">
                  <Image
                    src={urlForImage(project.image).url()}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Link
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-700"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
