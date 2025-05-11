import Image from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { urlForImage } from "@/lib/sanity";

interface CTAButton {
  text: string;
  link: string;
  icon: SanityImageSource;
}

interface Image {
  image: SanityImageSource;
  title: string;
  subtitle: string;
}

interface Feature {
  title: string;
  description: string;
  icon: SanityImageSource;
}

interface Vision {
  title: string;
  titleHighlight: string;
  subtitle: string;
  image: Image;
  ctaPrimary?: CTAButton;
  ctaSecondary?: CTAButton;
  features: Feature[];
}

export default function Vision({ data }: { data: Vision }) {
  console.log(data);

  const [feat1, feat2] = data.features;

  return (
    <section className="py-20 px-6 bg-white" id="vision">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl transform -rotate-6"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={urlForImage(data.image.image).url()}
                  alt={data.image.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white">
                    {data.image.title}
                  </h3>
                  <p className="text-sm text-white/80">{data.image.subtitle}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">
              {data.title}
              <span className="text-blue-600"> {data.titleHighlight}</span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              {data.subtitle}
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  {feat1.icon && (
                    <Image
                      src={urlForImage(feat1.icon).url()}
                      alt=""
                      width={20}
                      height={20}
                      className="w-6 h-6 text-blue-600"
                    />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feat1.title}
                </h3>
                <p className="text-gray-600">{feat1.description}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  {feat2.icon && (
                    <Image
                      src={urlForImage(feat2.icon).url()}
                      alt=""
                      width={20}
                      height={20}
                      className="w-6 h-6 text-purple-600"
                    />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feat2.title}
                </h3>
                <p className="text-gray-600">{feat2.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              {data.ctaPrimary && (
                <a
                  href={data.ctaPrimary.link}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center gap-2"
                >
                  {data.ctaPrimary.icon && (
                    <Image
                      src={urlForImage(data.ctaPrimary.icon).url()}
                      alt=""
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  )}
                  {data.ctaPrimary.text}
                </a>
              )}
              {data.ctaSecondary && (
                <a
                  href={data.ctaSecondary.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors font-medium inline-flex items-center gap-2"
                >
                  {data.ctaSecondary.icon && (
                    <Image
                      src={urlForImage(data.ctaSecondary.icon).url()}
                      alt=""
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  )}
                  {data.ctaSecondary.text}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
