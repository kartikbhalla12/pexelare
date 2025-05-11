export const revalidate = 60;

import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

import { client } from "@/sanity/lib/client";

import { projectQuery } from "@/lib/queries";
import { urlForImage } from "@/lib/sanity";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Project {
  title: string;
  slug: {
    current: string;
  };
  image: {
    asset: {
      url: string;
    };
  };
  techStack: string[];
  shortDescription: string;
  longDescription: PortableTextBlock[];
}

async function getProject(slug: string) {
  return await client.fetch<Project>(projectQuery, { slug });
}

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-6 text-gray-900">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mb-4 text-gray-900">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold mb-3 text-gray-900">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="mb-4 text-gray-600 leading-relaxed">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-6 mb-6 space-y-2 text-gray-600">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-6 mb-6 space-y-2 text-gray-600">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    },
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = await getProject((await params).slug);

  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8 pt-32">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h1 className="text-5xl font-bold mb-6 text-gray-900">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {project.shortDescription}
              </p>
            </div>

            {project.image && (
              <div className="relative w-full aspect-video mb-12 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={urlForImage(project.image).url()}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div className="mb-12">
              <div className="prose prose-lg max-w-none">
                <PortableText
                  value={project.longDescription}
                  components={components}
                />
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
