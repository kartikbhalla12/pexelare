export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-2xl w-full text-center space-y-12">
        <div className="space-y-2">
          <div className="text-3xl font-bold text-gray-900 tracking-tight">
            PEXELARE
          </div>
          <div className="text-sm text-gray-500">Design & Development</div>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">
            Coming Soon
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto leading-relaxed">
            We&apos;re crafting something extraordinary. Launching soon.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:contact@pexelare.info"
            className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/company/pexelare"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-colors font-medium flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Follow on LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
}
