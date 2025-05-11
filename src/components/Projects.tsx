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
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
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
