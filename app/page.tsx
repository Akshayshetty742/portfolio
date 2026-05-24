export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/20 blur-[150px] rounded-full"></div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10 relative z-10">
        <h1 className="text-3xl font-bold tracking-wide">
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
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32">

        <p className="text-cyan-400 tracking-[0.3em] mb-6 text-sm">
          AI • FRONTEND • CREATOR
        </p>

        <h1 className="text-6xl md:text-8xl font-bold leading-tight max-w-6xl">
          Building Modern AI &
          <br />
          <span className="text-cyan-400">
            Web Experiences
          </span>
        </h1>

        <p className="mt-10 text-gray-400 max-w-3xl text-lg md:text-xl leading-9">
          I’m Akshay, a Computer Science student specializing in AI & ML at
          PES University. Passionate about frontend development, AI tools,
          hackathons, and building impactful digital experiences.
        </p>

        <div className="mt-12 flex flex-col md:flex-row gap-6">
          <button className="bg-cyan-400 text-black px-10 py-5 rounded-2xl font-semibold hover:scale-105 hover:shadow-[0_0_40px_#22d3ee] transition duration-300">
            View Projects
          </button>

          <button className="border border-white/20 px-10 py-5 rounded-2xl hover:bg-white hover:text-black hover:scale-105 transition duration-300">
            Download Resume
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative z-10 max-w-6xl mx-auto px-6 py-32"
      >
        <div className="grid md:grid-cols-2 gap-20 items-center">

          <div>
            <p className="text-cyan-400 mb-4 tracking-[0.2em]">
              ABOUT ME
            </p>

            <h2 className="text-5xl font-bold leading-tight">
              Passionate About Building Modern Digital Experiences
            </h2>
          </div>

          <div>
            <p className="text-gray-400 text-lg leading-9">
              I am currently pursuing Computer Science Engineering in
              Artificial Intelligence & Machine Learning at PES University.
              I enjoy creating modern frontend applications, experimenting
              with AI tools, participating in hackathons, and building
              real-world impactful projects.
            </p>

            <p className="text-gray-400 text-lg leading-9 mt-6">
              My focus is on combining beautiful UI/UX with intelligent
              systems to create futuristic digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative z-10 max-w-6xl mx-auto px-6 py-32"
      >
        <div className="text-center mb-20">
          <p className="text-cyan-400 tracking-[0.2em] mb-4">
            SKILLS
          </p>

          <h2 className="text-5xl font-bold">
            Technologies I Work With
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-cyan-400 transition">
            <h3 className="text-2xl font-semibold mb-6">
              Frontend
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>React.js</p>
              <p>Next.js</p>
              <p>Tailwind CSS</p>
              <p>JavaScript</p>
              <p>HTML & CSS</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-cyan-400 transition">
            <h3 className="text-2xl font-semibold mb-6">
              AI & Tools
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>Python</p>
              <p>Machine Learning</p>
              <p>Prompt Engineering</p>
              <p>OpenAI APIs</p>
              <p>Firebase</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-cyan-400 transition">
            <h3 className="text-2xl font-semibold mb-6">
              Other Skills
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>Git & GitHub</p>
              <p>Vercel</p>
              <p>Figma</p>
              <p>Responsive Design</p>
              <p>UI/UX Design</p>
            </div>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative z-10 max-w-6xl mx-auto px-6 py-32"
      >
        <div className="text-center mb-20">
          <p className="text-cyan-400 tracking-[0.2em] mb-4">
            PROJECTS
          </p>

          <h2 className="text-5xl font-bold">
            Featured Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400 transition">
            <div className="h-60 bg-gradient-to-br from-cyan-500/20 to-blue-500/10"></div>

            <div className="p-8">
              <h3 className="text-3xl font-bold">
                AI SaaS Platform
              </h3>

              <p className="text-gray-400 mt-4 leading-8">
                A modern AI-powered SaaS application with authentication,
                dashboards, and AI integrations.
              </p>

              <button className="mt-6 text-cyan-400">
                View Project →
              </button>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400 transition">
            <div className="h-60 bg-gradient-to-br from-purple-500/20 to-pink-500/10"></div>

            <div className="p-8">
              <h3 className="text-3xl font-bold">
                Portfolio Website
              </h3>

              <p className="text-gray-400 mt-4 leading-8">
                A premium modern developer portfolio built with Next.js,
                Tailwind CSS, and responsive design principles.
              </p>

              <button className="mt-6 text-cyan-400">
                View Project →
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center"
      >
        <p className="text-cyan-400 tracking-[0.2em] mb-4">
          CONTACT
        </p>

        <h2 className="text-5xl font-bold mb-8">
          Let’s Build Something Amazing
        </h2>

        <p className="text-gray-400 text-lg leading-9">
          Interested in collaborations, internships, or exciting projects?
          Let’s connect and create impactful experiences together.
        </p>

        <div className="mt-12 flex justify-center gap-6 flex-wrap">
          <a
            href="mailto:shettyakshay742@gmail.com"
            className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Akshayshetty742"
            target="_blank"
            className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/akshay-shetty-618b63269"
            target="_blank"
            className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </a>
        </div>
      </section>

    </main>
  );
}