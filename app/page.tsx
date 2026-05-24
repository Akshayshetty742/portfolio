export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold">Akshay</h1>

        <div className="flex gap-8 text-sm text-gray-300">
          <a href="#">About</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        
        <p className="text-cyan-400 mb-4 tracking-widest">
          AI • FRONTEND • CREATOR
        </p>

        <h1 className="text-7xl font-bold leading-tight max-w-4xl">
          Building Modern AI &
          <span className="text-cyan-400"> Web Experiences</span>
        </h1>

        <p className="mt-8 text-gray-400 max-w-2xl text-lg leading-8">
          I’m Akshay, a Computer Science student specializing in AI & ML at
          PES University. Passionate about frontend development, AI tools,
          hackathons, and building impactful digital experiences.
        </p>

        <div className="mt-10 flex gap-6">
          <button className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
            View Projects
          </button>

          <button className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition">
            Download Resume
          </button>
        </div>
      </section>
    </main>
  );
}