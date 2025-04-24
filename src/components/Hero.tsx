export default function Hero() {
    return (
      <section className="flex flex-col items-center justify-center text-center px-4 py-20 bg-blue-50">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-700">
          Empowering Businesses with Modern Web Solutions
        </h1>
        <p className="mt-4 max-w-xl text-gray-600">
          We build fast, responsive, and user-friendly websites using Next.js, Tailwind CSS, and modern tools.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>
    );
  }
  