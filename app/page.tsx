export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/20 blur-[150px] rounded-full"></div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">

          <h1 className="text-3xl font-bold">
            Akshay
          </h1>

          <div className="hidden md:flex gap-10 text-sm text-gray-300">

            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>

          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">

        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-20 items-center">

          {/* Left Side */}
          <div>

            <p className="text-cyan-400 tracking-[0.3em] mb-6 text-sm">
              AI • FRONTEND • CREATOR
            </p>

            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              Hi, I'm
              <br />

              <span className="text-cyan-400">
                Akshay
              </span>
            </h1>

            <p className="mt-8 text-gray-400 text-lg leading-9 max-w-2xl">
              Computer Science student specializing in AI & ML at PES University.
              Passionate about frontend development, AI tools, hackathons,
              and building futuristic digital experiences.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-6">

              <button className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 hover:shadow-[0_0_40px_#22d3ee] transition duration-300">
                View Projects
              </button>

              <button className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition duration-300">
                Download Resume
              </button>

            </div>

            {/* Social Links */}
            <div className="mt-12 flex gap-8 text-gray-400">

              <a
                href="https://github.com/Akshayshetty742"
                target="_blank"
                className="hover:text-cyan-400 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/akshay-shetty-618b63269"
                target="_blank"
                className="hover:text-cyan-400 transition"
              >
                LinkedIn
              </a>

              <a
                href="mailto:shettyakshay742@gmail.com"
                className="hover:text-cyan-400 transition"
              >
                Email
              </a>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-cyan-400/20 blur-[100px] rounded-full"></div>

              {/* Profile Image */}
              <img
                src="/akshay.jpeg"
                alt="Akshay"
                className="relative z-10 w-[350px] h-[350px] object-cover rounded-full border-4 border-cyan-400/30 shadow-[0_0_60px_rgba(34,211,238,0.3)]"
              />

            </div>

          </div>

        </div>

      </section>

      {/* Stats Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
            <h2 className="text-4xl font-bold text-cyan-400">
              10+
            </h2>

            <p className="text-gray-400 mt-2">
              Projects
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
            <h2 className="text-4xl font-bold text-cyan-400">
              5+
            </h2>

            <p className="text-gray-400 mt-2">
              Hackathons
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
            <h2 className="text-4xl font-bold text-cyan-400">
              2+
            </h2>

            <p className="text-gray-400 mt-2">
              Internships
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
            <h2 className="text-4xl font-bold text-cyan-400">
              100%
            </h2>

            <p className="text-gray-400 mt-2">
              Passion
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}