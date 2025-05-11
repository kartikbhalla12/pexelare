import { urlForImage } from "@/lib/sanity";
import Image from "next/image";

interface Services {
  title: string;
  titleHighlight: string;
  subtitle: string;
  serviceItems: ServiceItem[];
  ctaButton: CTAButton;
}

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

interface CTAButton {
  text: string;
  link: string;
  icon: string;
}

export default function Services({ data }: { data: Services }) {
  return (
    <section className="py-16 px-6 bg-gray-50" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {data.title}
            <span className="text-blue-600"> {data.titleHighlight}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {data.serviceItems.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-center mb-4">
                {service.icon && (
                  <Image
                    src={urlForImage(service.icon).url()}
                    alt="Button icon"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={data.ctaButton.link}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg gap-2"
          >
            {data.ctaButton.text}

            {data.ctaButton.icon && (
              <Image
                src={urlForImage(data.ctaButton.icon).url()}
                alt="Button icon"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            )}
          </a>
        </div>
      </div>
    </section>
  );
}
