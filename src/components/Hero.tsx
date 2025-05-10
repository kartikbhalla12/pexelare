import Image from 'next/image';
import { urlForImage } from '@/lib/sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface CTAButton {
  text: string;
  link: string;
  icon: SanityImageSource;
}

interface TrustedCompanies {
  title: string;
  description: string;
  companies: SanityImageSource[];
}

interface Image {
  image: SanityImageSource;
  title: string;
  subtitle: string;
  cardTitle: string;
  cardSubtitle: string;
}

interface Hero {
  title: string;
  titleHighlight: string;
  subtitle: string;
  image: Image;
  ctaPrimary?: CTAButton;
  ctaSecondary?: CTAButton;
  trustedCompanies?: TrustedCompanies;
}



export default function Hero({ data }: { data: Hero }) {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              {data.title}
              <span className="text-blue-600"> {data.titleHighlight}</span>
            </h1>
            
            
            {/* </div> */}
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              {data.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {data.ctaPrimary && (
                <a
                  href={data.ctaPrimary.link}
                  className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  {data.ctaPrimary.icon && (
                    <Image
                      src={urlForImage(data.ctaPrimary.icon).url()}
                      alt="Button icon"
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
                  className="w-full sm:w-auto px-8 py-4 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-colors font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                   {data.ctaSecondary.icon && (
                    <Image
                      src={urlForImage(data.ctaSecondary.icon).url()}
                      alt="Button icon"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                      
                    />
                  )}
                  {data.ctaSecondary.text}
                </a>
              )}
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="flex -space-x-4">
                {data.trustedCompanies?.companies?.map((client, index) => (
                  <div key={index} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                    <Image
                      src={urlForImage(client).url()}
                      alt={`Client ${index + 1}`}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-gray-600">
                <p className="font-medium">{data.trustedCompanies?.title}</p>
                <p className="text-sm">{data.trustedCompanies?.description}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl transform rotate-6"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="aspect-video relative">
                {data.image && (
                  <Image
                    src={urlForImage(data.image.image).url()}
                    alt={data.image.title}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white">{data.image.title}</h3>
                  <p className="text-sm text-white/80">{data.image.subtitle}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{data.image.cardTitle}</h4>
                    <p className="text-sm text-gray-600">{data.image.cardSubtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 