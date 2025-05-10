import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src={'/logo.svg'} alt="Pexelare Logo" width={100} height={40} />
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#vision" className="text-gray-600 hover:text-gray-900 transition-colors">Vision</a>
          <a href="#linkedin" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
          <a href="#products" className="text-gray-600 hover:text-gray-900 transition-colors">Products</a>
        </nav>
        <a
          href="#contact"
          className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
} 