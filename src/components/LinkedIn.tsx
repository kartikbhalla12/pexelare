import Image from 'next/image';


export default function LinkedIn() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest from
            <span className="text-blue-600"> LinkedIn</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow our journey and stay updated with our latest insights and achievements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Post 1 - Webpack */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 overflow-hidden">
                  <Image
                    src={'/logo-short.png'}
                    alt="Pexelare"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Pexelare</h3>
                  <p className="text-sm text-gray-600">Technology, Information and Internet</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Struggling to manage your growing front-end project? Here&apos;s how Webpack can save your life (and your sanity). I broke it down slide by slide, using a real-world example that every developer can relate to — bundling a small project with JavaScript, SCSS, and TypeScript. Whether you&apos;re new to Webpack or need a quick refresher, this is for you.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">#JavaScript</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">#Webpack</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">#FrontendDevelopment</span>
              </div>
              <div className="flex items-center gap-6 text-gray-500 text-sm">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  4
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                  4 Comments
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                  Share
                </span>
              </div>
            </div>
          </div>

          {/* Post 2 - OTP */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12  overflow-hidden">
                  <Image
                    src={'/logo-short.png'}
                    alt="Pexelare"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Pexelare</h3>
                  <p className="text-sm text-gray-600">Technology, Information and Internet</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Ever filled out an OTP form and wished it would just auto-fill from your SMS? 🔐 Auto OTP Fill in React — Say Goodbye to Manual Typing! 🚀 Boost your user experience with automatic OTP detection & autofill in React apps! Using the Web OTP API, we can now automatically read SMS OTPs and populate the input without user interaction.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">#ReactJS</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">#OTP</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">#WebOTP</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">#UX</span>
              </div>
              <div className="flex items-center gap-6 text-gray-500 text-sm">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  6
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                  Comment
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                  Share
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="https://www.linkedin.com/company/pexelare"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-colors font-medium shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Follow Pexelare on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
} 