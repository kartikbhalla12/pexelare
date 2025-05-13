export const revalidate = 60;

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

import { client } from "@/sanity/lib/client";

import { projectQuery } from "@/lib/queries";
import { urlForImage } from "@/lib/sanity";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

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
  longDescription: PortableTextBlock[];
  projectLink: string;
}

async function getProject(slug: string) {
  return await client.fetch<Project>(projectQuery, { slug });
}

export interface TableRow {
  _key: string;
  _type: "tableRow";
  cells: string[];
}

export interface TableBlock {
  _key: string;
  _type: "table";
  rows: TableRow[];
}
interface TableRendererProps {
  value: TableBlock;
}

const TableRenderer: React.FC<TableRendererProps> = ({ value }) => {
  if (!value?.rows?.length) return null;

  return (
    <table className="w-full border-collapse">
      <tbody>
        {value.rows.map((row) => (
          <tr key={row._key}>
            {row.cells.map((cell, index) => (
              <td
                key={index}
                className="border border-gray-300 p-2 text-gray-700"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

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
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6 text-gray-700">
        {children}
      </blockquote>
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
    code: ({ children }) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-gray-800">{children}</em>,
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-8">
          <Image
            src={urlForImage(value).url()}
            alt={value.alt || "Project image"}
            width={800}
            height={450}
            className="rounded-lg shadow-lg"
          />
          {value.caption && (
            <p className="text-sm text-gray-500 mt-2 text-center">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
    //   const rows = value.rows || [];
    //   return (
    //     <div className="overflow-x-auto my-8">
    //       <table className="min-w-full divide-y divide-gray-200">
    //         <thead className="bg-gray-50">
    //           <tr>
    //             {value.header.map((header: string, index: number) => (
    //               <th
    //                 key={index}
    //                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    //               >
    //                 {header}
    //               </th>
    //             ))}
    //           </tr>
    //         </thead>
    //         <tbody className="bg-white divide-y divide-gray-200">
    //           {rows.map((row: string[], rowIndex: number) => (
    //             <tr key={rowIndex}>
    //               {row.map((cell: string, cellIndex: number) => (
    //                 <td
    //                   key={cellIndex}
    //                   className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
    //                 >
    //                   {cell}
    //                 </td>
    //               ))}
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>
    //   );
    // },
    code: ({ value }) => {
      return (
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-6">
          <code className="text-sm font-mono text-gray-700">{value.code}</code>
        </pre>
      );
    },
    table: TableRenderer,
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
            <Link
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-400 text-white font-medium rounded-lg hover:bg-blue-500 transition-colors duration-200 cursor-pointer mb-12"
            >
              Visit Live Project
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>

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
      <Breadcrumb />
      <Footer />
    </>
  );
}
